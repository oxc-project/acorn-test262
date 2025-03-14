__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 171,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 117,
      "body": {
        "type": "TSModuleBlock",
        "start": 12,
        "end": 117,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 15,
            "end": 82,
            "body": {
              "type": "TSInterfaceBody",
              "start": 30,
              "end": 82,
              "body": [
                {
                  "type": "TSConstructSignatureDeclaration",
                  "start": 34,
                  "end": 52,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 39,
                      "end": 46,
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 42,
                        "end": 46,
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 43,
                          "end": 46
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 47,
                    "end": 51,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 48,
                      "end": 51
                    }
                  }
                },
                {
                  "type": "TSMethodSignature",
                  "start": 61,
                  "end": 79,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 61,
                    "end": 64,
                    "decorators": [],
                    "name": "foo",
                    "optional": false
                  },
                  "kind": "method",
                  "optional": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 66,
                      "end": 73,
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 69,
                        "end": 73,
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 70,
                          "end": 73
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 74,
                    "end": 78,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 75,
                      "end": 78
                    }
                  },
                  "static": false
                }
              ]
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 25,
              "end": 29,
              "decorators": [],
              "name": "mInt",
              "optional": false
            }
          },
          {
            "type": "ClassDeclaration",
            "start": 89,
            "end": 115,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 97,
              "end": 115,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 99,
                  "end": 114,
                  "accessibility": "public",
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 106,
                    "end": 109,
                    "decorators": [],
                    "name": "moo",
                    "optional": false
                  },
                  "kind": "method",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 109,
                    "end": 114,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 112,
                      "end": 114,
                      "body": []
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": []
                  }
                }
              ]
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 95,
              "end": 96,
              "decorators": [],
              "name": "C",
              "optional": false
            },
            "implements": [],
            "superClass": null
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 11,
        "decorators": [],
        "name": "mod1",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "VariableDeclaration",
      "start": 119,
      "end": 134,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 123,
          "end": 133,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 123,
            "end": 133,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 125,
              "end": 133,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 127,
                "end": 133,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 127,
                  "end": 133,
                  "left": {
                    "type": "Identifier",
                    "start": 127,
                    "end": 131,
                    "decorators": [],
                    "name": "mod1",
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 132,
                    "end": 133,
                    "decorators": [],
                    "name": "C",
                    "optional": false
                  }
                }
              }
            }
          },
          "init": null
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
