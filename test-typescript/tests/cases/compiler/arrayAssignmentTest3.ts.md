__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 103,
  "end": 229,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 103,
      "end": 113,
      "id": {
        "type": "Identifier",
        "start": 109,
        "end": 110,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 111,
        "end": 113,
        "body": []
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
      "start": 115,
      "end": 190,
      "id": {
        "type": "Identifier",
        "start": 121,
        "end": 122,
        "name": "a",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 123,
        "end": 190,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 129,
            "end": 188,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 129,
              "end": 140,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 140,
              "end": 188,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
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
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 149,
                      "end": 157,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 151,
                        "end": 157
                      }
                    },
                    "decorators": [],
                    "optional": false
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
                    "name": "y",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 167,
                      "end": 175,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 169,
                        "end": 175
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  "readonly": false,
                  "static": false
                },
                {
                  "type": "Identifier",
                  "start": 177,
                  "end": 183,
                  "name": "z",
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
                        "typeName": {
                          "type": "Identifier",
                          "start": 180,
                          "end": 181,
                          "name": "B",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 185,
                "end": 188,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
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
      "start": 194,
      "end": 227,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 198,
          "end": 226,
          "id": {
            "type": "Identifier",
            "start": 198,
            "end": 200,
            "name": "xx",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 203,
            "end": 226,
            "callee": {
              "type": "Identifier",
              "start": 207,
              "end": 208,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 209,
                "end": 213,
                "value": null,
                "raw": "null"
              },
              {
                "type": "Literal",
                "start": 215,
                "end": 216,
                "value": 7,
                "raw": "7"
              },
              {
                "type": "NewExpression",
                "start": 218,
                "end": 225,
                "callee": {
                  "type": "Identifier",
                  "start": 222,
                  "end": 223,
                  "name": "B",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [],
                "typeArguments": null
              }
            ],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
