__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "regexes",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "RegExp",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 15,
                    "end": 21
                  },
                  "typeArguments": null,
                  "start": 15,
                  "end": 21
                },
                "start": 15,
                "end": 23
              },
              "start": 13,
              "end": 23
            },
            "start": 6,
            "end": 23
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": null,
                "raw": "/\\q\\u\\i\\c\\k\\_\\f\\o\\x\\-\\j\\u\\m\\p\\s/",
                "regex": {
                  "pattern": "\\q\\u\\i\\c\\k\\_\\f\\o\\x\\-\\j\\u\\m\\p\\s",
                  "flags": ""
                },
                "start": 30,
                "end": 62
              },
              {
                "type": "Literal",
                "value": null,
                "raw": "/[\\q\\u\\i\\c\\k\\_\\f\\o\\x\\-\\j\\u\\m\\p\\s]/",
                "regex": {
                  "pattern": "[\\q\\u\\i\\c\\k\\_\\f\\o\\x\\-\\j\\u\\m\\p\\s]",
                  "flags": ""
                },
                "start": 66,
                "end": 100
              },
              {
                "type": "Literal",
                "value": null,
                "raw": "/\\P[\\P\\w-_]/",
                "regex": {
                  "pattern": "\\P[\\P\\w-_]",
                  "flags": ""
                },
                "start": 104,
                "end": 116
              },
              {
                "type": "Literal",
                "value": null,
                "raw": "/\\q\\u\\i\\c\\k\\_\\f\\o\\x\\-\\j\\u\\m\\p\\s/u",
                "regex": {
                  "pattern": "\\q\\u\\i\\c\\k\\_\\f\\o\\x\\-\\j\\u\\m\\p\\s",
                  "flags": "u"
                },
                "start": 137,
                "end": 170
              },
              {
                "type": "Literal",
                "value": null,
                "raw": "/[\\q\\u\\i\\c\\k\\_\\f\\o\\x\\-\\j\\u\\m\\p\\s]/u",
                "regex": {
                  "pattern": "[\\q\\u\\i\\c\\k\\_\\f\\o\\x\\-\\j\\u\\m\\p\\s]",
                  "flags": "u"
                },
                "start": 174,
                "end": 209
              },
              {
                "type": "Literal",
                "value": null,
                "raw": "/\\P[\\P\\w-_]/u",
                "regex": {
                  "pattern": "\\P[\\P\\w-_]",
                  "flags": "u"
                },
                "start": 213,
                "end": 226
              }
            ],
            "start": 26,
            "end": 229
          },
          "definite": false,
          "start": 6,
          "end": 229
        }
      ],
      "declare": false,
      "start": 0,
      "end": 230
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "regexesWithBraces",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "RegExp",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 257,
                    "end": 263
                  },
                  "typeArguments": null,
                  "start": 257,
                  "end": 263
                },
                "start": 257,
                "end": 265
              },
              "start": 255,
              "end": 265
            },
            "start": 238,
            "end": 265
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": null,
                "raw": "/{??/",
                "regex": {
                  "pattern": "{??",
                  "flags": ""
                },
                "start": 272,
                "end": 277
              },
              {
                "type": "Literal",
                "value": null,
                "raw": "/{,??/",
                "regex": {
                  "pattern": "{,??",
                  "flags": ""
                },
                "start": 281,
                "end": 287
              },
              {
                "type": "Literal",
                "value": null,
                "raw": "/{,1??/",
                "regex": {
                  "pattern": "{,1??",
                  "flags": ""
                },
                "start": 291,
                "end": 298
              },
              {
                "type": "Literal",
                "value": null,
                "raw": "/{1??/",
                "regex": {
                  "pattern": "{1??",
                  "flags": ""
                },
                "start": 302,
                "end": 308
              },
              {
                "type": "Literal",
                "value": null,
                "raw": "/{1,??/",
                "regex": {
                  "pattern": "{1,??",
                  "flags": ""
                },
                "start": 312,
                "end": 319
              },
              {
                "type": "Literal",
                "value": null,
                "raw": "/{1,2??/",
                "regex": {
                  "pattern": "{1,2??",
                  "flags": ""
                },
                "start": 323,
                "end": 331
              },
              {
                "type": "Literal",
                "value": null,
                "raw": "/{2,1??/",
                "regex": {
                  "pattern": "{2,1??",
                  "flags": ""
                },
                "start": 335,
                "end": 343
              },
              {
                "type": "Literal",
                "value": null,
                "raw": "/{}??/",
                "regex": {
                  "pattern": "{}??",
                  "flags": ""
                },
                "start": 347,
                "end": 353
              },
              {
                "type": "Literal",
                "value": null,
                "raw": "/{,}??/",
                "regex": {
                  "pattern": "{,}??",
                  "flags": ""
                },
                "start": 357,
                "end": 364
              },
              {
                "type": "Literal",
                "value": null,
                "raw": "/{,1}??/",
                "regex": {
                  "pattern": "{,1}??",
                  "flags": ""
                },
                "start": 368,
                "end": 376
              },
              {
                "type": "Literal",
                "value": null,
                "raw": "/{1}??/",
                "regex": {
                  "pattern": "{1}??",
                  "flags": ""
                },
                "start": 380,
                "end": 387
              },
              {
                "type": "Literal",
                "value": null,
                "raw": "/{1,}??/",
                "regex": {
                  "pattern": "{1,}??",
                  "flags": ""
                },
                "start": 391,
                "end": 399
              },
              {
                "type": "Literal",
                "value": null,
                "raw": "/{1,2}??/",
                "regex": {
                  "pattern": "{1,2}??",
                  "flags": ""
                },
                "start": 403,
                "end": 412
              },
              {
                "type": "Literal",
                "value": null,
                "raw": "/{2,1}??/",
                "regex": {
                  "pattern": "{2,1}??",
                  "flags": ""
                },
                "start": 416,
                "end": 425
              },
              {
                "type": "Literal",
                "value": null,
                "raw": "/{??/u",
                "regex": {
                  "pattern": "{??",
                  "flags": "u"
                },
                "start": 446,
                "end": 452
              },
              {
                "type": "Literal",
                "value": null,
                "raw": "/{,??/u",
                "regex": {
                  "pattern": "{,??",
                  "flags": "u"
                },
                "start": 456,
                "end": 463
              },
              {
                "type": "Literal",
                "value": null,
                "raw": "/{,1??/u",
                "regex": {
                  "pattern": "{,1??",
                  "flags": "u"
                },
                "start": 467,
                "end": 475
              },
              {
                "type": "Literal",
                "value": null,
                "raw": "/{1??/u",
                "regex": {
                  "pattern": "{1??",
                  "flags": "u"
                },
                "start": 479,
                "end": 486
              },
              {
                "type": "Literal",
                "value": null,
                "raw": "/{1,??/u",
                "regex": {
                  "pattern": "{1,??",
                  "flags": "u"
                },
                "start": 490,
                "end": 498
              },
              {
                "type": "Literal",
                "value": null,
                "raw": "/{1,2??/u",
                "regex": {
                  "pattern": "{1,2??",
                  "flags": "u"
                },
                "start": 502,
                "end": 511
              },
              {
                "type": "Literal",
                "value": null,
                "raw": "/{2,1??/u",
                "regex": {
                  "pattern": "{2,1??",
                  "flags": "u"
                },
                "start": 515,
                "end": 524
              },
              {
                "type": "Literal",
                "value": null,
                "raw": "/{}??/u",
                "regex": {
                  "pattern": "{}??",
                  "flags": "u"
                },
                "start": 528,
                "end": 535
              },
              {
                "type": "Literal",
                "value": null,
                "raw": "/{,}??/u",
                "regex": {
                  "pattern": "{,}??",
                  "flags": "u"
                },
                "start": 539,
                "end": 547
              },
              {
                "type": "Literal",
                "value": null,
                "raw": "/{,1}??/u",
                "regex": {
                  "pattern": "{,1}??",
                  "flags": "u"
                },
                "start": 551,
                "end": 560
              },
              {
                "type": "Literal",
                "value": null,
                "raw": "/{1}??/u",
                "regex": {
                  "pattern": "{1}??",
                  "flags": "u"
                },
                "start": 564,
                "end": 572
              },
              {
                "type": "Literal",
                "value": null,
                "raw": "/{1,}??/u",
                "regex": {
                  "pattern": "{1,}??",
                  "flags": "u"
                },
                "start": 576,
                "end": 585
              },
              {
                "type": "Literal",
                "value": null,
                "raw": "/{1,2}??/u",
                "regex": {
                  "pattern": "{1,2}??",
                  "flags": "u"
                },
                "start": 589,
                "end": 599
              },
              {
                "type": "Literal",
                "value": null,
                "raw": "/{2,1}??/u",
                "regex": {
                  "pattern": "{2,1}??",
                  "flags": "u"
                },
                "start": 603,
                "end": 613
              }
            ],
            "start": 268,
            "end": 616
          },
          "definite": false,
          "start": 238,
          "end": 616
        }
      ],
      "declare": false,
      "start": 232,
      "end": 617
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 617
}
```
