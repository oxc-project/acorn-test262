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
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 11,
        "name": "mod1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
              "name": "mInt",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
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
                      "name": "bar",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 42,
                        "end": 46,
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 43,
                          "end": 46
                        }
                      },
                      "decorators": [],
                      "optional": false
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
                    "name": "foo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                      "name": "bar",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 69,
                        "end": 73,
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 70,
                          "end": 73
                        }
                      },
                      "decorators": [],
                      "optional": false
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
            "id": {
              "type": "Identifier",
              "start": 95,
              "end": 96,
              "name": "C",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 97,
              "end": 115,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 99,
                  "end": 114,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 106,
                    "end": 109,
                    "name": "moo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "method",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 109,
                    "end": 114,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "start": 112,
                      "end": 114,
                      "body": []
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": null
                  },
                  "decorators": [],
                  "override": false,
                  "optional": false,
                  "accessibility": "public"
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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 123,
          "end": 133,
          "id": {
            "type": "Identifier",
            "start": 123,
            "end": 133,
            "name": "c",
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
                    "name": "mod1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 132,
                    "end": 133,
                    "name": "C",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
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
