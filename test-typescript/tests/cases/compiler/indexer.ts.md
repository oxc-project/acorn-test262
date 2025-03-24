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
        "name": "JQueryElement",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
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
              "name": "id",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
        "name": "JQuery",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
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
                "name": "n",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 69,
                  "end": 76,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 70,
                    "end": 76
                  }
                },
                "decorators": [],
                "optional": false
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
                  "name": "JQueryElement",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 100,
          "end": 146,
          "id": {
            "type": "Identifier",
            "start": 100,
            "end": 109,
            "name": "jq",
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
                  "name": "JQuery",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
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
                "method": false,
                "shorthand": false,
                "computed": false,
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
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 117,
                        "end": 119,
                        "name": "id",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 122,
                        "end": 125,
                        "value": "a",
                        "raw": "\"a\""
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ]
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 129,
                "end": 144,
                "method": false,
                "shorthand": false,
                "computed": false,
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
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 134,
                        "end": 136,
                        "name": "id",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 139,
                        "end": 142,
                        "value": "b",
                        "raw": "\"b\""
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ]
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
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
            "name": "jq",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Literal",
            "start": 151,
            "end": 152,
            "value": 0,
            "raw": "0"
          },
          "computed": true,
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 154,
          "end": 156,
          "name": "id",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
