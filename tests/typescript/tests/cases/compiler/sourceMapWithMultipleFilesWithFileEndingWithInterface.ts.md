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
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 11
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "X",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 29,
                    "end": 30
                  },
                  "init": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 33,
                    "end": 34
                  },
                  "definite": false,
                  "start": 29,
                  "end": 34
                }
              ],
              "declare": false,
              "start": 25,
              "end": 35
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 18,
            "end": 35
          }
        ],
        "start": 12,
        "end": 37
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 37
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Navigator",
        "optional": false,
        "typeAnnotation": null,
        "start": 48,
        "end": 57
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "getGamepads",
              "optional": false,
              "typeAnnotation": null,
              "start": 64,
              "end": 75
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "func",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 83,
                    "end": 86
                  },
                  "start": 81,
                  "end": 86
                },
                "start": 76,
                "end": 86
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 89,
                "end": 92
              },
              "start": 87,
              "end": 92
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 64,
            "end": 93
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "webkitGetGamepads",
              "optional": false,
              "typeAnnotation": null,
              "start": 98,
              "end": 115
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "func",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 123,
                    "end": 126
                  },
                  "start": 121,
                  "end": 126
                },
                "start": 116,
                "end": 126
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 129,
                "end": 132
              },
              "start": 127,
              "end": 132
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 98,
            "end": 132
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "msGetGamepads",
              "optional": false,
              "typeAnnotation": null,
              "start": 137,
              "end": 150
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "func",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 158,
                    "end": 161
                  },
                  "start": 156,
                  "end": 161
                },
                "start": 151,
                "end": 161
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 164,
                "end": 167
              },
              "start": 162,
              "end": 167
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 137,
            "end": 168
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "webkitGamepads",
              "optional": false,
              "typeAnnotation": null,
              "start": 173,
              "end": 187
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "func",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 195,
                    "end": 198
                  },
                  "start": 193,
                  "end": 198
                },
                "start": 188,
                "end": 198
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 201,
                "end": 204
              },
              "start": 199,
              "end": 204
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 173,
            "end": 205
          }
        ],
        "start": 58,
        "end": 207
      },
      "declare": false,
      "start": 38,
      "end": 207
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 208
}
```
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
        "name": "m1",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 12
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "c1",
                "optional": false,
                "typeAnnotation": null,
                "start": 32,
                "end": 34
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 35,
                "end": 42
              },
              "abstract": false,
              "declare": false,
              "start": 26,
              "end": 42
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 19,
            "end": 42
          }
        ],
        "start": 13,
        "end": 44
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 44
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 44
}
```
