__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 214,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 133,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 133,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 61,
            "end": 90,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 68,
              "end": 71,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 71,
              "end": 90,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 72,
                  "end": 81,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 73,
                    "end": 81,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 75,
                      "end": 81
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 83,
                  "end": 89,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 84,
                    "end": 89,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 86,
                      "end": 89
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 95,
            "end": 131,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 102,
              "end": 105,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 105,
              "end": 131,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 128,
                "end": 131,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 106,
                  "end": 115,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 107,
                    "end": 115,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 109,
                      "end": 115
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 117,
                  "end": 126,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 118,
                    "end": 126,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 120,
                      "end": 126
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "C",
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
      "start": 135,
      "end": 146,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 139,
          "end": 145,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 139,
            "end": 140,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 143,
            "end": 145,
            "raw": "10",
            "value": 10,
            "regex": null,
            "bigint": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 191,
      "end": 214,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 203,
          "end": 213,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 203,
            "end": 213,
            "decorators": [],
            "name": "OData",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 208,
              "end": 213,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 210,
                "end": 213
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
