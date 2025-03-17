__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 240,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 66,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 66,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 14,
            "end": 64,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 21,
              "end": 24,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 24,
              "end": 64,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 35,
                "end": 64,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 45,
                    "end": 58,
                    "argument": {
                      "type": "Literal",
                      "start": 52,
                      "end": 57,
                      "value": "123",
                      "raw": "\"123\""
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 26,
                "end": 34,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 28,
                  "end": 34
                }
              }
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
      "start": 68,
      "end": 89,
      "id": {
        "type": "Identifier",
        "start": 74,
        "end": 75,
        "name": "D",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 84,
        "end": 85,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 86,
        "end": 89,
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
      "type": "TSModuleDeclaration",
      "start": 91,
      "end": 164,
      "id": {
        "type": "Identifier",
        "start": 98,
        "end": 99,
        "name": "D",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 100,
        "end": 164,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 106,
            "end": 161,
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 113,
              "end": 161,
              "id": {
                "type": "Identifier",
                "start": 122,
                "end": 125,
                "name": "foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 136,
                "end": 161,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 146,
                    "end": 155,
                    "argument": {
                      "type": "Literal",
                      "start": 153,
                      "end": 154,
                      "value": 0,
                      "raw": "0"
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 127,
                "end": 135,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 129,
                  "end": 135
                }
              }
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "EmptyStatement",
            "start": 161,
            "end": 162
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "ClassDeclaration",
      "start": 166,
      "end": 239,
      "id": {
        "type": "Identifier",
        "start": 172,
        "end": 173,
        "name": "E",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 182,
        "end": 183,
        "name": "D",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 184,
        "end": 239,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 190,
            "end": 237,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 197,
              "end": 200,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 200,
              "end": 237,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 203,
                "end": 237,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 213,
                    "end": 231,
                    "argument": {
                      "type": "CallExpression",
                      "start": 220,
                      "end": 230,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 220,
                        "end": 228,
                        "object": {
                          "type": "ThisExpression",
                          "start": 220,
                          "end": 224
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 225,
                          "end": 228,
                          "name": "foo",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [],
                      "optional": false,
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
