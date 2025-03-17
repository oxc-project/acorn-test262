__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 172,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 121,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "name": "a",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 121,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 14,
            "end": 72,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 25,
              "end": 26,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 26,
              "end": 72,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 43,
                "end": 72,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 53,
                    "end": 65,
                    "argument": {
                      "type": "Literal",
                      "start": 60,
                      "end": 64,
                      "value": null,
                      "raw": "null"
                    }
                  },
                  {
                    "type": "EmptyStatement",
                    "start": 65,
                    "end": 66
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 28,
                "end": 42,
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "start": 30,
                  "end": 42,
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 33,
                    "end": 42,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 36,
                      "end": 42
                    }
                  }
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 77,
            "end": 119,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 88,
              "end": 89,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "set",
            "value": {
              "type": "FunctionExpression",
              "start": 89,
              "end": 119,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 90,
                  "end": 110,
                  "name": "aValue",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 96,
                    "end": 110,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 98,
                      "end": 110,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 101,
                        "end": 110,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 104,
                          "end": 110
                        }
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 112,
                "end": 119,
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
      "type": "ClassDeclaration",
      "start": 123,
      "end": 172,
      "id": {
        "type": "Identifier",
        "start": 129,
        "end": 130,
        "name": "b",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 139,
        "end": 140,
        "name": "a",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 141,
        "end": 172,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 147,
            "end": 170,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 154,
              "end": 155,
              "name": "x",
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
              "start": 155,
              "end": 169,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 157,
                "end": 169,
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 160,
                  "end": 169,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 163,
                    "end": 169
                  }
                }
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
