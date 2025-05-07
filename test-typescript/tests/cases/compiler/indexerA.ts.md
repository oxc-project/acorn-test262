__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 148,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 38,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 20,
        "end": 38,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 26,
            "end": 36,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 26,
              "end": 28,
              "decorators": [],
              "name": "id",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 28,
              "end": 35,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 29,
                "end": 35
              }
            },
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 19,
        "decorators": [],
        "name": "JQueryElement",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 40,
      "end": 85,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 53,
        "end": 85,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 59,
            "end": 83,
            "accessibility": null,
            "parameters": [
              {
                "type": "Identifier",
                "start": 60,
                "end": 68,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 61,
                  "end": 68,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 62,
                    "end": 68
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 69,
              "end": 83,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 70,
                "end": 83,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 70,
                  "end": 83,
                  "decorators": [],
                  "name": "JQueryElement",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 46,
        "end": 52,
        "decorators": [],
        "name": "JQuery",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 87,
      "end": 138,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 91,
          "end": 137,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 91,
            "end": 100,
            "decorators": [],
            "name": "jq",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 93,
              "end": 100,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 94,
                "end": 100,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 94,
                  "end": 100,
                  "decorators": [],
                  "name": "JQuery",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 101,
            "end": 137,
            "properties": [
              {
                "type": "Property",
                "start": 103,
                "end": 118,
                "computed": false,
                "key": {
                  "type": "Literal",
                  "start": 103,
                  "end": 104,
                  "raw": "0",
                  "value": 0,
                  "regex": null,
                  "bigint": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ObjectExpression",
                  "start": 106,
                  "end": 118,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 108,
                      "end": 116,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 108,
                        "end": 110,
                        "decorators": [],
                        "name": "id",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 113,
                        "end": 116,
                        "raw": "\"a\"",
                        "value": "a",
                        "regex": null,
                        "bigint": null
                      }
                    }
                  ]
                }
              },
              {
                "type": "Property",
                "start": 120,
                "end": 135,
                "computed": false,
                "key": {
                  "type": "Literal",
                  "start": 120,
                  "end": 121,
                  "raw": "1",
                  "value": 1,
                  "regex": null,
                  "bigint": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ObjectExpression",
                  "start": 123,
                  "end": 135,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 125,
                      "end": 133,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 125,
                        "end": 127,
                        "decorators": [],
                        "name": "id",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 130,
                        "end": 133,
                        "raw": "\"b\"",
                        "value": "b",
                        "regex": null,
                        "bigint": null
                      }
                    }
                  ]
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 139,
      "end": 148,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 139,
        "end": 147,
        "computed": false,
        "object": {
          "type": "MemberExpression",
          "start": 139,
          "end": 144,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 139,
            "end": 141,
            "decorators": [],
            "name": "jq",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "start": 142,
            "end": 143,
            "raw": "0",
            "value": 0,
            "regex": null,
            "bigint": null
          }
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 145,
          "end": 147,
          "decorators": [],
          "name": "id",
          "optional": false,
          "typeAnnotation": null
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
