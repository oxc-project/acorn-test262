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
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 20,
        "end": 38,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 26,
            "end": 36,
            "decorators": [],
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
              "end": 35,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 29,
                "end": 35
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 40,
      "end": 85,
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
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 53,
        "end": 85,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 59,
            "end": 83,
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 69,
              "end": 83,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 70,
                "end": 83,
                "typeName": {
                  "type": "Identifier",
                  "start": 70,
                  "end": 83,
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
      "abstract": false,
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 87,
      "end": 138,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 91,
          "end": 137,
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
                "typeName": {
                  "type": "Identifier",
                  "start": 94,
                  "end": 100,
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
            "start": 101,
            "end": 137,
            "properties": [
              {
                "type": "Property",
                "start": 103,
                "end": 118,
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "start": 103,
                  "end": 104,
                  "value": 0,
                  "raw": "0"
                },
                "value": {
                  "type": "ObjectExpression",
                  "start": 106,
                  "end": 118,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 108,
                      "end": 116,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 108,
                        "end": 110,
                        "decorators": [],
                        "name": "id",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Literal",
                        "start": 113,
                        "end": 116,
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
                "start": 120,
                "end": 135,
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "start": 120,
                  "end": 121,
                  "value": 1,
                  "raw": "1"
                },
                "value": {
                  "type": "ObjectExpression",
                  "start": 123,
                  "end": 135,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 125,
                      "end": 133,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 125,
                        "end": 127,
                        "decorators": [],
                        "name": "id",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Literal",
                        "start": 130,
                        "end": 133,
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
      "start": 139,
      "end": 148,
      "expression": {
        "type": "MemberExpression",
        "start": 139,
        "end": 147,
        "object": {
          "type": "MemberExpression",
          "start": 139,
          "end": 144,
          "object": {
            "type": "Identifier",
            "start": 139,
            "end": 141,
            "decorators": [],
            "name": "jq",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Literal",
            "start": 142,
            "end": 143,
            "value": 0,
            "raw": "0"
          },
          "optional": false,
          "computed": true
        },
        "property": {
          "type": "Identifier",
          "start": 145,
          "end": 147,
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
