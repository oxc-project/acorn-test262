__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 407,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 136,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 19,
        "decorators": [],
        "name": "IMenuItem",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 20,
        "end": 136,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 26,
            "end": 37,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 26,
              "end": 28,
              "decorators": [],
              "name": "id",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 28,
              "end": 36,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 30,
                "end": 36
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 42,
            "end": 55,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 42,
              "end": 46,
              "decorators": [],
              "name": "type",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 46,
              "end": 54,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 48,
                "end": 54
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 60,
            "end": 74,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 60,
              "end": 64,
              "decorators": [],
              "name": "link",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 65,
              "end": 73,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 67,
                "end": 73
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 79,
            "end": 96,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 79,
              "end": 86,
              "decorators": [],
              "name": "classes",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 87,
              "end": 95,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 89,
                "end": 95
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 101,
            "end": 115,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 101,
              "end": 105,
              "decorators": [],
              "name": "text",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 106,
              "end": 114,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 108,
                "end": 114
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 120,
            "end": 134,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 120,
              "end": 124,
              "decorators": [],
              "name": "icon",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 125,
              "end": 133,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 127,
                "end": 133
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 137,
      "end": 407,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 141,
          "end": 406,
          "id": {
            "type": "Identifier",
            "start": 141,
            "end": 162,
            "decorators": [],
            "name": "menuData",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 149,
              "end": 162,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 151,
                "end": 162,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 151,
                  "end": 160,
                  "typeName": {
                    "type": "Identifier",
                    "start": 151,
                    "end": 160,
                    "decorators": [],
                    "name": "IMenuItem",
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
            "start": 165,
            "end": 406,
            "elements": [
              {
                "type": "ObjectExpression",
                "start": 171,
                "end": 288,
                "properties": [
                  {
                    "type": "Property",
                    "start": 181,
                    "end": 196,
                    "kind": "init",
                    "key": {
                      "type": "Literal",
                      "start": 181,
                      "end": 185,
                      "value": "id",
                      "raw": "\"id\""
                    },
                    "value": {
                      "type": "Literal",
                      "start": 187,
                      "end": 196,
                      "value": "ourLogo",
                      "raw": "\"ourLogo\""
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 206,
                    "end": 221,
                    "kind": "init",
                    "key": {
                      "type": "Literal",
                      "start": 206,
                      "end": 212,
                      "value": "type",
                      "raw": "\"type\""
                    },
                    "value": {
                      "type": "Literal",
                      "start": 214,
                      "end": 221,
                      "value": "image",
                      "raw": "\"image\""
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 231,
                    "end": 241,
                    "kind": "init",
                    "key": {
                      "type": "Literal",
                      "start": 231,
                      "end": 237,
                      "value": "link",
                      "raw": "\"link\""
                    },
                    "value": {
                      "type": "Literal",
                      "start": 239,
                      "end": 241,
                      "value": "",
                      "raw": "\"\""
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 251,
                    "end": 282,
                    "kind": "init",
                    "key": {
                      "type": "Literal",
                      "start": 251,
                      "end": 257,
                      "value": "icon",
                      "raw": "\"icon\""
                    },
                    "value": {
                      "type": "Literal",
                      "start": 259,
                      "end": 282,
                      "value": "modules/menu/logo.svg",
                      "raw": "\"modules/menu/logo.svg\""
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  }
                ]
              },
              {
                "type": "ObjectExpression",
                "start": 290,
                "end": 404,
                "properties": [
                  {
                    "type": "Property",
                    "start": 300,
                    "end": 319,
                    "kind": "init",
                    "key": {
                      "type": "Literal",
                      "start": 300,
                      "end": 304,
                      "value": "id",
                      "raw": "\"id\""
                    },
                    "value": {
                      "type": "Literal",
                      "start": 306,
                      "end": 319,
                      "value": "productName",
                      "raw": "\"productName\""
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 329,
                    "end": 346,
                    "kind": "init",
                    "key": {
                      "type": "Literal",
                      "start": 329,
                      "end": 335,
                      "value": "type",
                      "raw": "\"type\""
                    },
                    "value": {
                      "type": "Literal",
                      "start": 337,
                      "end": 346,
                      "value": "default",
                      "raw": "\"default\""
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 356,
                    "end": 366,
                    "kind": "init",
                    "key": {
                      "type": "Literal",
                      "start": 356,
                      "end": 362,
                      "value": "link",
                      "raw": "\"link\""
                    },
                    "value": {
                      "type": "Literal",
                      "start": 364,
                      "end": 366,
                      "value": "",
                      "raw": "\"\""
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 376,
                    "end": 398,
                    "kind": "init",
                    "key": {
                      "type": "Literal",
                      "start": 376,
                      "end": 382,
                      "value": "text",
                      "raw": "\"text\""
                    },
                    "value": {
                      "type": "Literal",
                      "start": 384,
                      "end": 398,
                      "value": "Product Name",
                      "raw": "\"Product Name\""
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  }
                ]
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
