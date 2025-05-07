__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 166,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 15,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 10,
        "end": 15,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 12,
            "end": 13,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 12,
              "end": 13,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 9,
        "decorators": [],
        "name": "Foo",
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
      "start": 16,
      "end": 35,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 27,
        "end": 35,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 29,
            "end": 31,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 29,
              "end": 30,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 32,
            "end": 33,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 32,
              "end": 33,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 22,
        "end": 26,
        "decorators": [],
        "name": "Foo2",
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
      "start": 37,
      "end": 166,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 45,
        "end": 166,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 51,
            "end": 75,
            "accessibility": null,
            "parameters": [
              {
                "type": "Identifier",
                "start": 52,
                "end": 61,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 53,
                  "end": 61,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 55,
                    "end": 61
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 62,
              "end": 74,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 64,
                "end": 74,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 67,
                  "end": 74,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 70,
                    "end": 74,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 70,
                      "end": 74,
                      "decorators": [],
                      "name": "Foo2",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "typeParameters": null
              }
            }
          },
          {
            "type": "MethodDefinition",
            "start": 108,
            "end": 133,
            "accessibility": null,
            "computed": true,
            "decorators": [],
            "key": {
              "type": "Literal",
              "start": 109,
              "end": 111,
              "raw": "\"\"",
              "value": "",
              "regex": null,
              "bigint": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 112,
              "end": 133,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 115,
                "end": 133,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 117,
                    "end": 131,
                    "argument": {
                      "type": "NewExpression",
                      "start": 124,
                      "end": 131,
                      "arguments": [],
                      "callee": {
                        "type": "Identifier",
                        "start": 128,
                        "end": 131,
                        "decorators": [],
                        "name": "Foo",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 138,
            "end": 164,
            "accessibility": null,
            "computed": true,
            "decorators": [],
            "key": {
              "type": "Literal",
              "start": 139,
              "end": 141,
              "raw": "\"\"",
              "value": "",
              "regex": null,
              "bigint": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 142,
              "end": 164,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 145,
                "end": 164,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 147,
                    "end": 162,
                    "argument": {
                      "type": "NewExpression",
                      "start": 154,
                      "end": 162,
                      "arguments": [],
                      "callee": {
                        "type": "Identifier",
                        "start": 158,
                        "end": 162,
                        "decorators": [],
                        "name": "Foo2",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
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
        "start": 43,
        "end": 44,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
