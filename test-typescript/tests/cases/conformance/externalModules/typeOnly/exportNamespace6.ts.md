/a.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 36,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 17,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 17,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 15,
          "end": 17,
          "body": []
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 14,
          "decorators": [],
          "name": "A",
          "optional": false
        },
        "implements": [],
        "superClass": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 18,
      "end": 35,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 25,
        "end": 35,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 33,
          "end": 35,
          "body": []
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 31,
          "end": 32,
          "decorators": [],
          "name": "B",
          "optional": false
        },
        "implements": [],
        "superClass": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module"
}
```
/b.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 26,
  "body": [
    {
      "type": "ExportAllDeclaration",
      "start": 0,
      "end": 25,
      "attributes": [],
      "exported": null,
      "exportKind": "type",
      "source": {
        "type": "Literal",
        "start": 19,
        "end": 24,
        "raw": "\"./a\"",
        "value": "./a"
      }
    }
  ],
  "sourceType": "module"
}
```
/c.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 21,
  "body": [
    {
      "type": "ExportAllDeclaration",
      "start": 0,
      "end": 20,
      "attributes": [],
      "exported": null,
      "exportKind": "value",
      "source": {
        "type": "Literal",
        "start": 14,
        "end": 19,
        "raw": "\"./b\"",
        "value": "./b"
      }
    }
  ],
  "sourceType": "module"
}
```
/d.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 87,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 27,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 21,
        "end": 26,
        "raw": "\"./c\"",
        "value": "./c"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 10,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 10,
            "decorators": [],
            "name": "A",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 10,
            "decorators": [],
            "name": "A",
            "optional": false
          }
        },
        {
          "type": "ImportSpecifier",
          "start": 12,
          "end": 13,
          "imported": {
            "type": "Identifier",
            "start": 12,
            "end": 13,
            "decorators": [],
            "name": "B",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 12,
            "end": 13,
            "decorators": [],
            "name": "B",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "VariableDeclaration",
      "start": 28,
      "end": 47,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 32,
          "end": 46,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 32,
            "end": 36,
            "decorators": [],
            "name": "_",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 33,
              "end": 36,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 35,
                "end": 36,
                "typeName": {
                  "type": "Identifier",
                  "start": 35,
                  "end": 36,
                  "decorators": [],
                  "name": "A",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "start": 39,
            "end": 46,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 43,
              "end": 44,
              "decorators": [],
              "name": "A",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 58,
      "end": 78,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 62,
          "end": 77,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 62,
            "end": 67,
            "decorators": [],
            "name": "__",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 64,
              "end": 67,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 66,
                "end": 67,
                "typeName": {
                  "type": "Identifier",
                  "start": 66,
                  "end": 67,
                  "decorators": [],
                  "name": "B",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "start": 70,
            "end": 77,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 74,
              "end": 75,
              "decorators": [],
              "name": "B",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    }
  ],
  "sourceType": "module"
}
```
