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
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 19,
        "name": "JQueryElement",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 20,
        "end": 38,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 26,
            "end": 36,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 26,
              "end": 28,
              "name": "id",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 40,
      "end": 85,
      "id": {
        "type": "Identifier",
        "start": 46,
        "end": 52,
        "name": "JQuery",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
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
                "name": "n",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 61,
                  "end": 68,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 62,
                    "end": 68
                  }
                },
                "decorators": [],
                "optional": false
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
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
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
          "id": {
            "type": "Identifier",
            "start": 91,
            "end": 100,
            "name": "jq",
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
            "start": 101,
            "end": 137,
            "properties": [
              {
                "type": "Property",
                "start": 103,
                "end": 118,
                "method": false,
                "shorthand": false,
                "computed": false,
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
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 108,
                        "end": 110,
                        "name": "id",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 113,
                        "end": 116,
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
                "start": 120,
                "end": 135,
                "method": false,
                "shorthand": false,
                "computed": false,
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
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 125,
                        "end": 127,
                        "name": "id",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 130,
                        "end": 133,
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
            "name": "jq",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Literal",
            "start": 142,
            "end": 143,
            "value": 0,
            "raw": "0"
          },
          "computed": true,
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 145,
          "end": 147,
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
