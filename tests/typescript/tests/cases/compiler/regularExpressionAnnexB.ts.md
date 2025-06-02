__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 617,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 230,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 229,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 23,
            "decorators": [],
            "name": "regexes",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 13,
              "end": 23,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 15,
                "end": 23,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 15,
                  "end": 21,
                  "typeName": {
                    "type": "Identifier",
                    "start": 15,
                    "end": 21,
                    "decorators": [],
                    "name": "RegExp",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 26,
            "end": 229,
            "elements": [
              {
                "type": "Literal",
                "start": 30,
                "end": 62,
                "value": null,
                "raw": "/\\q\\u\\i\\c\\k\\_\\f\\o\\x\\-\\j\\u\\m\\p\\s/",
                "regex": {
                  "pattern": "\\q\\u\\i\\c\\k\\_\\f\\o\\x\\-\\j\\u\\m\\p\\s",
                  "flags": ""
                }
              },
              {
                "type": "Literal",
                "start": 66,
                "end": 100,
                "value": null,
                "raw": "/[\\q\\u\\i\\c\\k\\_\\f\\o\\x\\-\\j\\u\\m\\p\\s]/",
                "regex": {
                  "pattern": "[\\q\\u\\i\\c\\k\\_\\f\\o\\x\\-\\j\\u\\m\\p\\s]",
                  "flags": ""
                }
              },
              {
                "type": "Literal",
                "start": 104,
                "end": 116,
                "value": null,
                "raw": "/\\P[\\P\\w-_]/",
                "regex": {
                  "pattern": "\\P[\\P\\w-_]",
                  "flags": ""
                }
              },
              {
                "type": "Literal",
                "start": 137,
                "end": 170,
                "value": null,
                "raw": "/\\q\\u\\i\\c\\k\\_\\f\\o\\x\\-\\j\\u\\m\\p\\s/u",
                "regex": {
                  "pattern": "\\q\\u\\i\\c\\k\\_\\f\\o\\x\\-\\j\\u\\m\\p\\s",
                  "flags": "u"
                }
              },
              {
                "type": "Literal",
                "start": 174,
                "end": 209,
                "value": null,
                "raw": "/[\\q\\u\\i\\c\\k\\_\\f\\o\\x\\-\\j\\u\\m\\p\\s]/u",
                "regex": {
                  "pattern": "[\\q\\u\\i\\c\\k\\_\\f\\o\\x\\-\\j\\u\\m\\p\\s]",
                  "flags": "u"
                }
              },
              {
                "type": "Literal",
                "start": 213,
                "end": 226,
                "value": null,
                "raw": "/\\P[\\P\\w-_]/u",
                "regex": {
                  "pattern": "\\P[\\P\\w-_]",
                  "flags": "u"
                }
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 232,
      "end": 617,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 238,
          "end": 616,
          "id": {
            "type": "Identifier",
            "start": 238,
            "end": 265,
            "decorators": [],
            "name": "regexesWithBraces",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 255,
              "end": 265,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 257,
                "end": 265,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 257,
                  "end": 263,
                  "typeName": {
                    "type": "Identifier",
                    "start": 257,
                    "end": 263,
                    "decorators": [],
                    "name": "RegExp",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 268,
            "end": 616,
            "elements": [
              {
                "type": "Literal",
                "start": 272,
                "end": 277,
                "value": null,
                "raw": "/{??/",
                "regex": {
                  "pattern": "{??",
                  "flags": ""
                }
              },
              {
                "type": "Literal",
                "start": 281,
                "end": 287,
                "value": null,
                "raw": "/{,??/",
                "regex": {
                  "pattern": "{,??",
                  "flags": ""
                }
              },
              {
                "type": "Literal",
                "start": 291,
                "end": 298,
                "value": null,
                "raw": "/{,1??/",
                "regex": {
                  "pattern": "{,1??",
                  "flags": ""
                }
              },
              {
                "type": "Literal",
                "start": 302,
                "end": 308,
                "value": null,
                "raw": "/{1??/",
                "regex": {
                  "pattern": "{1??",
                  "flags": ""
                }
              },
              {
                "type": "Literal",
                "start": 312,
                "end": 319,
                "value": null,
                "raw": "/{1,??/",
                "regex": {
                  "pattern": "{1,??",
                  "flags": ""
                }
              },
              {
                "type": "Literal",
                "start": 323,
                "end": 331,
                "value": null,
                "raw": "/{1,2??/",
                "regex": {
                  "pattern": "{1,2??",
                  "flags": ""
                }
              },
              {
                "type": "Literal",
                "start": 335,
                "end": 343,
                "value": null,
                "raw": "/{2,1??/",
                "regex": {
                  "pattern": "{2,1??",
                  "flags": ""
                }
              },
              {
                "type": "Literal",
                "start": 347,
                "end": 353,
                "value": null,
                "raw": "/{}??/",
                "regex": {
                  "pattern": "{}??",
                  "flags": ""
                }
              },
              {
                "type": "Literal",
                "start": 357,
                "end": 364,
                "value": null,
                "raw": "/{,}??/",
                "regex": {
                  "pattern": "{,}??",
                  "flags": ""
                }
              },
              {
                "type": "Literal",
                "start": 368,
                "end": 376,
                "value": null,
                "raw": "/{,1}??/",
                "regex": {
                  "pattern": "{,1}??",
                  "flags": ""
                }
              },
              {
                "type": "Literal",
                "start": 380,
                "end": 387,
                "value": null,
                "raw": "/{1}??/",
                "regex": {
                  "pattern": "{1}??",
                  "flags": ""
                }
              },
              {
                "type": "Literal",
                "start": 391,
                "end": 399,
                "value": null,
                "raw": "/{1,}??/",
                "regex": {
                  "pattern": "{1,}??",
                  "flags": ""
                }
              },
              {
                "type": "Literal",
                "start": 403,
                "end": 412,
                "value": null,
                "raw": "/{1,2}??/",
                "regex": {
                  "pattern": "{1,2}??",
                  "flags": ""
                }
              },
              {
                "type": "Literal",
                "start": 416,
                "end": 425,
                "value": null,
                "raw": "/{2,1}??/",
                "regex": {
                  "pattern": "{2,1}??",
                  "flags": ""
                }
              },
              {
                "type": "Literal",
                "start": 446,
                "end": 452,
                "value": null,
                "raw": "/{??/u",
                "regex": {
                  "pattern": "{??",
                  "flags": "u"
                }
              },
              {
                "type": "Literal",
                "start": 456,
                "end": 463,
                "value": null,
                "raw": "/{,??/u",
                "regex": {
                  "pattern": "{,??",
                  "flags": "u"
                }
              },
              {
                "type": "Literal",
                "start": 467,
                "end": 475,
                "value": null,
                "raw": "/{,1??/u",
                "regex": {
                  "pattern": "{,1??",
                  "flags": "u"
                }
              },
              {
                "type": "Literal",
                "start": 479,
                "end": 486,
                "value": null,
                "raw": "/{1??/u",
                "regex": {
                  "pattern": "{1??",
                  "flags": "u"
                }
              },
              {
                "type": "Literal",
                "start": 490,
                "end": 498,
                "value": null,
                "raw": "/{1,??/u",
                "regex": {
                  "pattern": "{1,??",
                  "flags": "u"
                }
              },
              {
                "type": "Literal",
                "start": 502,
                "end": 511,
                "value": null,
                "raw": "/{1,2??/u",
                "regex": {
                  "pattern": "{1,2??",
                  "flags": "u"
                }
              },
              {
                "type": "Literal",
                "start": 515,
                "end": 524,
                "value": null,
                "raw": "/{2,1??/u",
                "regex": {
                  "pattern": "{2,1??",
                  "flags": "u"
                }
              },
              {
                "type": "Literal",
                "start": 528,
                "end": 535,
                "value": null,
                "raw": "/{}??/u",
                "regex": {
                  "pattern": "{}??",
                  "flags": "u"
                }
              },
              {
                "type": "Literal",
                "start": 539,
                "end": 547,
                "value": null,
                "raw": "/{,}??/u",
                "regex": {
                  "pattern": "{,}??",
                  "flags": "u"
                }
              },
              {
                "type": "Literal",
                "start": 551,
                "end": 560,
                "value": null,
                "raw": "/{,1}??/u",
                "regex": {
                  "pattern": "{,1}??",
                  "flags": "u"
                }
              },
              {
                "type": "Literal",
                "start": 564,
                "end": 572,
                "value": null,
                "raw": "/{1}??/u",
                "regex": {
                  "pattern": "{1}??",
                  "flags": "u"
                }
              },
              {
                "type": "Literal",
                "start": 576,
                "end": 585,
                "value": null,
                "raw": "/{1,}??/u",
                "regex": {
                  "pattern": "{1,}??",
                  "flags": "u"
                }
              },
              {
                "type": "Literal",
                "start": 589,
                "end": 599,
                "value": null,
                "raw": "/{1,2}??/u",
                "regex": {
                  "pattern": "{1,2}??",
                  "flags": "u"
                }
              },
              {
                "type": "Literal",
                "start": 603,
                "end": 613,
                "value": null,
                "raw": "/{2,1}??/u",
                "regex": {
                  "pattern": "{2,1}??",
                  "flags": "u"
                }
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
