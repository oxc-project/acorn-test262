__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Encoder",
          "optional": false,
          "typeAnnotation": null,
          "start": 17,
          "end": 24
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
                "start": 25,
                "end": 26
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 25,
              "end": 26
            }
          ],
          "start": 24,
          "end": 27
        },
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSMethodSignature",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "encode",
                "optional": false,
                "typeAnnotation": null,
                "start": 34,
                "end": 40
              },
              "computed": false,
              "optional": false,
              "kind": "method",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 48,
                        "end": 49
                      },
                      "typeArguments": null,
                      "start": 48,
                      "end": 49
                    },
                    "start": 46,
                    "end": 49
                  },
                  "start": 41,
                  "end": 49
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Uint8Array",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 52,
                    "end": 62
                  },
                  "typeArguments": null,
                  "start": 52,
                  "end": 62
                },
                "start": 50,
                "end": 62
              },
              "accessibility": null,
              "readonly": false,
              "static": false,
              "start": 34,
              "end": 62
            }
          ],
          "start": 28,
          "end": 64
        },
        "declare": false,
        "start": 7,
        "end": 64
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 64
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 64
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Encoder",
          "optional": false,
          "typeAnnotation": null,
          "start": 65,
          "end": 72
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
                "name": "encode",
                "optional": false,
                "typeAnnotation": null,
                "start": 120,
                "end": 126
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
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 127,
                    "end": 132
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "NewExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Uint8Array",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 155,
                          "end": 165
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 166,
                            "end": 167
                          }
                        ],
                        "start": 151,
                        "end": 168
                      },
                      "start": 144,
                      "end": 168
                    }
                  ],
                  "start": 134,
                  "end": 174
                },
                "expression": false,
                "start": 126,
                "end": 174
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 120,
              "end": 174
            }
          ],
          "start": 73,
          "end": 176
        },
        "abstract": false,
        "declare": false,
        "start": 59,
        "end": 176
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 52,
      "end": 176
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 52,
  "end": 257
}
```
