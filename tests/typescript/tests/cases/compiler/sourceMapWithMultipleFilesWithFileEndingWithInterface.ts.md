__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 205,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 34,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 34,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 15,
            "end": 32,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 22,
              "end": 32,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 26,
                  "end": 31,
                  "id": {
                    "type": "Identifier",
                    "start": 26,
                    "end": 27,
                    "decorators": [],
                    "name": "X",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Literal",
                    "start": 30,
                    "end": 31,
                    "value": 1,
                    "raw": "1"
                  },
                  "definite": false
                }
              ],
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 35,
      "end": 204,
      "id": {
        "type": "Identifier",
        "start": 45,
        "end": 54,
        "decorators": [],
        "name": "Navigator",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 55,
        "end": 204,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 61,
            "end": 90,
            "key": {
              "type": "Identifier",
              "start": 61,
              "end": 72,
              "decorators": [],
              "name": "getGamepads",
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
                "start": 73,
                "end": 83,
                "decorators": [],
                "name": "func",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 78,
                  "end": 83,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 80,
                    "end": 83
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 84,
              "end": 89,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 86,
                "end": 89
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 95,
            "end": 129,
            "key": {
              "type": "Identifier",
              "start": 95,
              "end": 112,
              "decorators": [],
              "name": "webkitGetGamepads",
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
                "start": 113,
                "end": 123,
                "decorators": [],
                "name": "func",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 118,
                  "end": 123,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 120,
                    "end": 123
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 124,
              "end": 129,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 126,
                "end": 129
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 134,
            "end": 165,
            "key": {
              "type": "Identifier",
              "start": 134,
              "end": 147,
              "decorators": [],
              "name": "msGetGamepads",
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
                "start": 148,
                "end": 158,
                "decorators": [],
                "name": "func",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 153,
                  "end": 158,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 155,
                    "end": 158
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 159,
              "end": 164,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 161,
                "end": 164
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 170,
            "end": 202,
            "key": {
              "type": "Identifier",
              "start": 170,
              "end": 184,
              "decorators": [],
              "name": "webkitGamepads",
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
                "start": 185,
                "end": 195,
                "decorators": [],
                "name": "func",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 190,
                  "end": 195,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 192,
                    "end": 195
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 196,
              "end": 201,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 198,
                "end": 201
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 41,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 41,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 9,
        "decorators": [],
        "name": "m1",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 10,
        "end": 41,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 16,
            "end": 39,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 23,
              "end": 39,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 29,
                "end": 31,
                "decorators": [],
                "name": "c1",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "start": 32,
                "end": 39,
                "body": []
              },
              "abstract": false,
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
