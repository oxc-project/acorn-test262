__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 157,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 42,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 23,
        "decorators": [],
        "name": "JQueryElement",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 24,
        "end": 42,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 30,
            "end": 40,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 30,
              "end": 32,
              "decorators": [],
              "name": "id",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 32,
              "end": 39,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 33,
                "end": 39
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
      "type": "TSInterfaceDeclaration",
      "start": 44,
      "end": 94,
      "id": {
        "type": "Identifier",
        "start": 54,
        "end": 60,
        "decorators": [],
        "name": "JQuery",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 61,
        "end": 94,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 67,
            "end": 92,
            "parameters": [
              {
                "type": "Identifier",
                "start": 68,
                "end": 76,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 69,
                  "end": 76,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 70,
                    "end": 76
                  }
                }
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 77,
              "end": 91,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 78,
                "end": 91,
                "typeName": {
                  "type": "Identifier",
                  "start": 78,
                  "end": 91,
                  "decorators": [],
                  "name": "JQueryElement",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "readonly": false,
            "static": false,
            "accessibility": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 96,
      "end": 147,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 100,
          "end": 146,
          "id": {
            "type": "Identifier",
            "start": 100,
            "end": 109,
            "decorators": [],
            "name": "jq",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 102,
              "end": 109,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 103,
                "end": 109,
                "typeName": {
                  "type": "Identifier",
                  "start": 103,
                  "end": 109,
                  "decorators": [],
                  "name": "JQuery",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 110,
            "end": 146,
            "properties": [
              {
                "type": "Property",
                "start": 112,
                "end": 127,
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "start": 112,
                  "end": 113,
                  "value": 0,
                  "raw": "0"
                },
                "value": {
                  "type": "ObjectExpression",
                  "start": 115,
                  "end": 127,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 117,
                      "end": 125,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 117,
                        "end": 119,
                        "decorators": [],
                        "name": "id",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Literal",
                        "start": 122,
                        "end": 125,
                        "value": "a",
                        "raw": "\"a\""
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    }
                  ]
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 129,
                "end": 144,
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "start": 129,
                  "end": 130,
                  "value": 1,
                  "raw": "1"
                },
                "value": {
                  "type": "ObjectExpression",
                  "start": 132,
                  "end": 144,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 134,
                      "end": 142,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 134,
                        "end": 136,
                        "decorators": [],
                        "name": "id",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Literal",
                        "start": 139,
                        "end": 142,
                        "value": "b",
                        "raw": "\"b\""
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    }
                  ]
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 148,
      "end": 157,
      "expression": {
        "type": "MemberExpression",
        "start": 148,
        "end": 156,
        "object": {
          "type": "MemberExpression",
          "start": 148,
          "end": 153,
          "object": {
            "type": "Identifier",
            "start": 148,
            "end": 150,
            "decorators": [],
            "name": "jq",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Literal",
            "start": 151,
            "end": 152,
            "value": 0,
            "raw": "0"
          },
          "optional": false,
          "computed": true
        },
        "property": {
          "type": "Identifier",
          "start": 154,
          "end": 156,
          "decorators": [],
          "name": "id",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
