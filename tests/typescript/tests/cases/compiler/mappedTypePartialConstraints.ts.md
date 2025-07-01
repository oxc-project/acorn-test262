__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyInterface",
        "optional": false,
        "typeAnnotation": null,
        "start": 32,
        "end": 43
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "something",
              "optional": false,
              "typeAnnotation": null,
              "start": 48,
              "end": 57
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 59,
                "end": 65
              },
              "start": 57,
              "end": 65
            },
            "accessibility": null,
            "static": false,
            "start": 48,
            "end": 66
          }
        ],
        "start": 44,
        "end": 68
      },
      "declare": false,
      "start": 22,
      "end": 68
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 76,
        "end": 83
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 84,
              "end": 85
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "MyInterface",
                "optional": false,
                "typeAnnotation": null,
                "start": 94,
                "end": 105
              },
              "typeArguments": null,
              "start": 94,
              "end": 105
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 84,
            "end": 105
          }
        ],
        "start": 83,
        "end": 106
      },
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
              "name": "doIt",
              "optional": false,
              "typeAnnotation": null,
              "start": 111,
              "end": 115
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "data",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Partial",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 123,
                        "end": 130
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 131,
                              "end": 132
                            },
                            "typeArguments": null,
                            "start": 131,
                            "end": 132
                          }
                        ],
                        "start": 130,
                        "end": 133
                      },
                      "start": 123,
                      "end": 133
                    },
                    "start": 121,
                    "end": 133
                  },
                  "start": 116,
                  "end": 133
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 135,
                "end": 137
              },
              "expression": false,
              "start": 115,
              "end": 137
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 111,
            "end": 137
          }
        ],
        "start": 107,
        "end": 139
      },
      "abstract": false,
      "declare": false,
      "start": 70,
      "end": 139
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MySubClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 147,
        "end": 157
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 166,
        "end": 173
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "params": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "MyInterface",
              "optional": false,
              "typeAnnotation": null,
              "start": 174,
              "end": 185
            },
            "typeArguments": null,
            "start": 174,
            "end": 185
          }
        ],
        "start": 173,
        "end": 186
      },
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 187,
        "end": 189
      },
      "abstract": false,
      "declare": false,
      "start": 141,
      "end": 189
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn",
        "optional": false,
        "typeAnnotation": null,
        "start": 200,
        "end": 202
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "MyClass",
                "optional": false,
                "typeAnnotation": null,
                "start": 215,
                "end": 222
              },
              "typeArguments": null,
              "start": 208,
              "end": 222
            },
            "start": 206,
            "end": 222
          },
          "start": 203,
          "end": 222
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 224,
        "end": 226
      },
      "expression": false,
      "start": 191,
      "end": 226
    },
    {
      "type": "EmptyStatement",
      "start": 226,
      "end": 227
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn",
          "optional": false,
          "typeAnnotation": null,
          "start": 229,
          "end": 231
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "MySubClass",
            "optional": false,
            "typeAnnotation": null,
            "start": 232,
            "end": 242
          }
        ],
        "optional": false,
        "start": 229,
        "end": 243
      },
      "directive": null,
      "start": 229,
      "end": 244
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 22,
  "end": 244
}
```
