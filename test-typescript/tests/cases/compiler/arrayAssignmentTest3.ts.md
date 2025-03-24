__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 103,
  "end": 228,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 103,
      "end": 113,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 111,
        "end": 113,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 109,
        "end": 110,
        "decorators": [],
        "name": "B",
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
      "start": 115,
      "end": 190,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 123,
        "end": 190,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 129,
            "end": 188,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 129,
              "end": 140,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 140,
              "end": 188,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 185,
                "end": 188,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 141,
                  "end": 157,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 148,
                    "end": 157,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 149,
                      "end": 157,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 151,
                        "end": 157
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
                },
                {
                  "type": "TSParameterProperty",
                  "start": 159,
                  "end": 175,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 166,
                    "end": 175,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 167,
                      "end": 175,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 169,
                        "end": 175
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
                },
                {
                  "type": "Identifier",
                  "start": 177,
                  "end": 183,
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 178,
                    "end": 183,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 180,
                      "end": 183,
                      "elementType": {
                        "type": "TSTypeReference",
                        "start": 180,
                        "end": 181,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 180,
                          "end": 181,
                          "decorators": [],
                          "name": "B",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
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
        "start": 121,
        "end": 122,
        "decorators": [],
        "name": "a",
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
      "start": 194,
      "end": 227,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 198,
          "end": 226,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 198,
            "end": 200,
            "decorators": [],
            "name": "xx",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 203,
            "end": 226,
            "arguments": [
              {
                "type": "Literal",
                "start": 209,
                "end": 213,
                "raw": "null",
                "value": null
              },
              {
                "type": "Literal",
                "start": 215,
                "end": 216,
                "raw": "7",
                "value": 7
              },
              {
                "type": "NewExpression",
                "start": 218,
                "end": 225,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 222,
                  "end": 223,
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 207,
              "end": 208,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
