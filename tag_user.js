/**
 * Created with JetBrains PhpStorm.
 * User: adam.malone
 * Date: 23/6/13
 * Time: 23:57 28
 * To change this template use File | Settings | File Templates.
 */

(function ($) {
    /**
     * Attaches the autocomplete behavior to all required fields.
     */
    Drupal.behaviors.tag_user = {
        attach: function (context, settings) {
            var acdb = [];
            $('input.tag-user', context).once('tag-user', function () {
                console.log('got here');

//                var uri = this.value;
//                if (!acdb[uri]) {
//                    acdb[uri] = new Drupal.ACDB(uri);
//                }
//                var $input = $('#' + this.id.substr(0, this.id.length - 13))
//                    .attr('autocomplete', 'OFF')
//                    .attr('aria-autocomplete', 'list');
//                $($input[0].form).submit(Drupal.autocompleteSubmit);
//                $input.parent()
//                    .attr('role', 'application')
//                    .append($('<span class="element-invisible" aria-live="assertive"></span>')
//                        .attr('id', $input.attr('id') + '-autocomplete-aria-live')
//                    );
//                new Drupal.jsAC($input, acdb[uri]);
            });
        }
    };

})(jQuery);
