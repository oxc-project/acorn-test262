__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "mod1",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 14
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "mInt",
              "optional": false,
              "typeAnnotation": null,
              "start": 28,
              "end": 32
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSConstructSignatureDeclaration",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 46,
                          "end": 49
                        },
                        "start": 45,
                        "end": 49
                      },
                      "start": 42,
                      "end": 49
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 51,
                      "end": 54
                    },
                    "start": 50,
                    "end": 54
                  },
                  "start": 37,
                  "end": 55
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 64,
                    "end": 67
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 73,
                          "end": 76
                        },
                        "start": 72,
                        "end": 76
                      },
                      "start": 69,
                      "end": 76
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 78,
                      "end": 81
                    },
                    "start": 77,
                    "end": 81
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 64,
                  "end": 82
                }
              ],
              "start": 33,
              "end": 85
            },
            "declare": false,
            "start": 18,
            "end": 85
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 98,
              "end": 99
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "moo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 109,
                    "end": 112
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 115,
                      "end": 117
                    },
                    "expression": false,
                    "start": 112,
                    "end": 117
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 102,
                  "end": 117
                }
              ],
              "start": 100,
              "end": 118
            },
            "abstract": false,
            "declare": false,
            "start": 92,
            "end": 118
          }
        ],
        "start": 15,
        "end": 120
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 120
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "mod1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 130,
                    "end": 134
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 135,
                    "end": 136
                  },
                  "start": 130,
                  "end": 136
                },
                "typeArguments": null,
                "start": 130,
                "end": 136
              },
              "start": 128,
              "end": 136
            },
            "start": 126,
            "end": 136
          },
          "init": null,
          "definite": false,
          "start": 126,
          "end": 136
        }
      ],
      "declare": false,
      "start": 122,
      "end": 137
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 173
}
```
