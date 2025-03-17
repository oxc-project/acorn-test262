__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 27,
  "end": 241,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 27,
      "end": 160,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 35,
        "end": 160,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 88,
            "end": 117,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 95,
              "end": 98,
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
              "start": 98,
              "end": 117,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 99,
                  "end": 108,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 100,
                    "end": 108,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 102,
                      "end": 108
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 110,
                  "end": 116,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 111,
                    "end": 116,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 113,
                      "end": 116
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
            "start": 122,
            "end": 158,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 129,
              "end": 132,
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
              "start": 132,
              "end": 158,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 155,
                "end": 158,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 133,
                  "end": 142,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 134,
                    "end": 142,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 136,
                      "end": 142
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 144,
                  "end": 153,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 145,
                    "end": 153,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 147,
                      "end": 153
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
        "start": 33,
        "end": 34,
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
      "start": 162,
      "end": 173,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 166,
          "end": 172,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 166,
            "end": 167,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 170,
            "end": 172,
            "raw": "10",
            "value": 10
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 218,
      "end": 241,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 230,
          "end": 240,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 230,
            "end": 240,
            "decorators": [],
            "name": "OData",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 235,
              "end": 240,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 237,
                "end": 240
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
