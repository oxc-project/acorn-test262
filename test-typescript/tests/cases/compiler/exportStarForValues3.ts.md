__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 27,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 26,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 7,
        "end": 26,
        "body": {
          "type": "TSInterfaceBody",
          "start": 21,
          "end": 26,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 23,
              "end": 24,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 23,
                "end": 24,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": null
            }
          ]
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "start": 17,
          "end": 20,
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
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
  "end": 58,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 24,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 7,
        "end": 24,
        "body": {
          "type": "TSInterfaceBody",
          "start": 19,
          "end": 24,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 21,
              "end": 22,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 21,
                "end": 22,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": null
            }
          ]
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "start": 17,
          "end": 18,
          "decorators": [],
          "name": "A",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportAllDeclaration",
      "start": 25,
      "end": 46,
      "attributes": [],
      "exported": null,
      "exportKind": "value",
      "source": {
        "type": "Literal",
        "start": 39,
        "end": 46,
        "raw": "\"file1\"",
        "value": "file1"
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 47,
      "end": 57,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 51,
          "end": 56,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 51,
            "end": 52,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 55,
            "end": 56,
            "raw": "1",
            "value": 1
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
  "end": 58,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 24,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 7,
        "end": 24,
        "body": {
          "type": "TSInterfaceBody",
          "start": 19,
          "end": 24,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 21,
              "end": 22,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 21,
                "end": 22,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": null
            }
          ]
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "start": 17,
          "end": 18,
          "decorators": [],
          "name": "B",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportAllDeclaration",
      "start": 25,
      "end": 46,
      "attributes": [],
      "exported": null,
      "exportKind": "value",
      "source": {
        "type": "Literal",
        "start": 39,
        "end": 46,
        "raw": "\"file1\"",
        "value": "file1"
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 47,
      "end": 57,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 51,
          "end": 56,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 51,
            "end": 52,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 55,
            "end": 56,
            "raw": "1",
            "value": 1
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
  "end": 80,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 24,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 7,
        "end": 24,
        "body": {
          "type": "TSInterfaceBody",
          "start": 19,
          "end": 24,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 21,
              "end": 22,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 21,
                "end": 22,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": null
            }
          ]
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "start": 17,
          "end": 18,
          "decorators": [],
          "name": "C",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportAllDeclaration",
      "start": 25,
      "end": 46,
      "attributes": [],
      "exported": null,
      "exportKind": "value",
      "source": {
        "type": "Literal",
        "start": 39,
        "end": 46,
        "raw": "\"file2\"",
        "value": "file2"
      }
    },
    {
      "type": "ExportAllDeclaration",
      "start": 47,
      "end": 68,
      "attributes": [],
      "exported": null,
      "exportKind": "value",
      "source": {
        "type": "Literal",
        "start": 61,
        "end": 68,
        "raw": "\"file3\"",
        "value": "file3"
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 69,
      "end": 79,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 73,
          "end": 78,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 73,
            "end": 74,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 77,
            "end": 78,
            "raw": "1",
            "value": 1
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
  "end": 32,
  "body": [
    {
      "type": "ExportAllDeclaration",
      "start": 0,
      "end": 21,
      "attributes": [],
      "exported": null,
      "exportKind": "value",
      "source": {
        "type": "Literal",
        "start": 14,
        "end": 21,
        "raw": "\"file4\"",
        "value": "file4"
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 22,
      "end": 32,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 26,
          "end": 31,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 26,
            "end": 27,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 30,
            "end": 31,
            "raw": "1",
            "value": 1
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
