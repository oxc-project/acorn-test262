__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 170,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 117,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 11,
        "decorators": [],
        "name": "mod1",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 12,
        "end": 117,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 15,
            "end": 82,
            "id": {
              "type": "Identifier",
              "start": 25,
              "end": 29,
              "decorators": [],
              "name": "mInt",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "start": 30,
              "end": 82,
              "body": [
                {
                  "type": "TSConstructSignatureDeclaration",
                  "start": 34,
                  "end": 52,
                  "typeParameters": null,
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
                  "key": {
                    "type": "Identifier",
                    "start": 61,
                    "end": 64,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
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
                  "accessibility": null,
                  "readonly": false,
                  "static": false
                }
              ]
            },
            "declare": false
          },
          {
            "type": "ClassDeclaration",
            "start": 89,
            "end": 115,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 95,
              "end": 96,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "start": 97,
              "end": 115,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 99,
                  "end": 114,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 106,
                    "end": 109,
                    "decorators": [],
                    "name": "moo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "start": 109,
                    "end": 114,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "start": 112,
                      "end": 114,
                      "body": []
                    },
                    "expression": false
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public"
                }
              ]
            },
            "abstract": false,
            "declare": false
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "VariableDeclaration",
      "start": 119,
      "end": 134,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 123,
          "end": 133,
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
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 132,
                    "end": 133,
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
