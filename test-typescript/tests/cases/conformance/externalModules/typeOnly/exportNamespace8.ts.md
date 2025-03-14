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
          "name": "B",
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
          "name": "C",
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
/c.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 66,
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
    },
    {
      "type": "ExportAllDeclaration",
      "start": 26,
      "end": 46,
      "attributes": [],
      "exported": null,
      "exportKind": "value",
      "source": {
        "type": "Literal",
        "start": 40,
        "end": 45,
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
  "end": 118,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 30,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 24,
        "end": 29,
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
        },
        {
          "type": "ImportSpecifier",
          "start": 15,
          "end": 16,
          "imported": {
            "type": "Identifier",
            "start": 15,
            "end": 16,
            "decorators": [],
            "name": "C",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 15,
            "end": 16,
            "decorators": [],
            "name": "C",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "VariableDeclaration",
      "start": 31,
      "end": 50,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 35,
          "end": 49,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 35,
            "end": 39,
            "decorators": [],
            "name": "_",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 36,
              "end": 39,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 38,
                "end": 39,
                "typeName": {
                  "type": "Identifier",
                  "start": 38,
                  "end": 39,
                  "decorators": [],
                  "name": "A",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "start": 42,
            "end": 49,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 46,
              "end": 47,
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
      "start": 62,
      "end": 82,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 66,
          "end": 81,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 66,
            "end": 71,
            "decorators": [],
            "name": "__",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 68,
              "end": 71,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 70,
                "end": 71,
                "typeName": {
                  "type": "Identifier",
                  "start": 70,
                  "end": 71,
                  "decorators": [],
                  "name": "B",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "start": 74,
            "end": 81,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 78,
              "end": 79,
              "decorators": [],
              "name": "B",
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
      "start": 90,
      "end": 111,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 94,
          "end": 110,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 94,
            "end": 100,
            "decorators": [],
            "name": "___",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 97,
              "end": 100,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 99,
                "end": 100,
                "typeName": {
                  "type": "Identifier",
                  "start": 99,
                  "end": 100,
                  "decorators": [],
                  "name": "C",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "start": 103,
            "end": 110,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 107,
              "end": 108,
              "decorators": [],
              "name": "C",
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
