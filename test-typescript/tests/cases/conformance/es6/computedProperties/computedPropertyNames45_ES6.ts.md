__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 248,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 15,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 9,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 10,
        "end": 15,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 12,
            "end": 13,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 12,
              "end": 13,
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
            "typeAnnotation": null,
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
      "start": 16,
      "end": 35,
      "id": {
        "type": "Identifier",
        "start": 22,
        "end": 26,
        "name": "Foo2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 27,
        "end": 35,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 29,
            "end": 31,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 29,
              "end": 30,
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
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 32,
            "end": 33,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 32,
              "end": 33,
              "name": "y",
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
            "typeAnnotation": null,
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
      "start": 37,
      "end": 86,
      "id": {
        "type": "Identifier",
        "start": 43,
        "end": 44,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 45,
        "end": 86,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 51,
            "end": 84,
            "static": false,
            "computed": true,
            "key": {
              "type": "Literal",
              "start": 56,
              "end": 62,
              "value": "get1",
              "raw": "\"get1\""
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 63,
              "end": 84,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 66,
                "end": 84,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 68,
                    "end": 82,
                    "argument": {
                      "type": "NewExpression",
                      "start": 75,
                      "end": 82,
                      "callee": {
                        "type": "Identifier",
                        "start": 79,
                        "end": 82,
                        "name": "Foo",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [],
                      "typeArguments": null
                    }
                  }
                ]
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
      "start": 88,
      "end": 248,
      "id": {
        "type": "Identifier",
        "start": 94,
        "end": 95,
        "name": "D",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 104,
        "end": 105,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 106,
        "end": 248,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 199,
            "end": 217,
            "parameters": [
              {
                "type": "Identifier",
                "start": 200,
                "end": 209,
                "name": "s",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 201,
                  "end": 209,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 203,
                    "end": 209
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 210,
              "end": 216,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 212,
                "end": 216,
                "typeName": {
                  "type": "Identifier",
                  "start": 212,
                  "end": 216,
                  "name": "Foo2",
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
          },
          {
            "type": "MethodDefinition",
            "start": 222,
            "end": 246,
            "static": false,
            "computed": true,
            "key": {
              "type": "Literal",
              "start": 227,
              "end": 233,
              "value": "set1",
              "raw": "\"set1\""
            },
            "kind": "set",
            "value": {
              "type": "FunctionExpression",
              "start": 234,
              "end": 246,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 235,
                  "end": 241,
                  "name": "p",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 236,
                    "end": 241,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 238,
                      "end": 241,
                      "typeName": {
                        "type": "Identifier",
                        "start": 238,
                        "end": 241,
                        "name": "Foo",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 243,
                "end": 246,
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
