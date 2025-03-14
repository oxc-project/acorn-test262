server.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 191,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 40,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 7,
        "end": 40,
        "body": {
          "type": "TSInterfaceBody",
          "start": 19,
          "end": 40,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 25,
              "end": 38,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 25,
                "end": 29,
                "decorators": [],
                "name": "prop",
                "optional": false
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 29,
                "end": 37,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 31,
                  "end": 37
                }
              }
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
          "name": "I",
          "optional": false
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 41,
      "end": 83,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 48,
        "end": 83,
        "body": {
          "type": "TSInterfaceBody",
          "start": 61,
          "end": 83,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 67,
              "end": 81,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 67,
                "end": 72,
                "decorators": [],
                "name": "prop2",
                "optional": false
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 72,
                "end": 80,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 74,
                  "end": 80
                }
              }
            }
          ]
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "start": 58,
          "end": 60,
          "decorators": [],
          "name": "I2",
          "optional": false
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 84,
      "end": 135,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 91,
        "end": 135,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 112,
          "end": 135,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 118,
              "end": 133,
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 118,
                "end": 122,
                "decorators": [],
                "name": "prop",
                "optional": false
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "value": {
                "type": "Literal",
                "start": 125,
                "end": 132,
                "raw": "\"hello\"",
                "value": "hello"
              }
            }
          ]
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 97,
          "end": 98,
          "decorators": [],
          "name": "C",
          "optional": false
        },
        "implements": [
          {
            "type": "TSClassImplements",
            "start": 110,
            "end": 111,
            "expression": {
              "type": "Identifier",
              "start": 110,
              "end": 111,
              "decorators": [],
              "name": "I",
              "optional": false
            }
          }
        ],
        "superClass": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 136,
      "end": 190,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 143,
        "end": 190,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 166,
          "end": 190,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 172,
              "end": 188,
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 172,
                "end": 177,
                "decorators": [],
                "name": "prop2",
                "optional": false
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "value": {
                "type": "Literal",
                "start": 180,
                "end": 187,
                "raw": "\"world\"",
                "value": "world"
              }
            }
          ]
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 149,
          "end": 151,
          "decorators": [],
          "name": "C2",
          "optional": false
        },
        "implements": [
          {
            "type": "TSClassImplements",
            "start": 163,
            "end": 165,
            "expression": {
              "type": "Identifier",
              "start": 163,
              "end": 165,
              "decorators": [],
              "name": "I2",
              "optional": false
            }
          }
        ],
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
client.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 168,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 36,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 25,
        "end": 35,
        "raw": "\"./server\"",
        "value": "./server"
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
            "name": "C",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 10,
            "decorators": [],
            "name": "C",
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
            "name": "I",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 12,
            "end": 13,
            "decorators": [],
            "name": "I",
            "optional": false
          }
        },
        {
          "type": "ImportSpecifier",
          "start": 15,
          "end": 17,
          "imported": {
            "type": "Identifier",
            "start": 15,
            "end": 17,
            "decorators": [],
            "name": "C2",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 15,
            "end": 17,
            "decorators": [],
            "name": "C2",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 111,
      "end": 141,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 118,
        "end": 141,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 123,
          "end": 136,
          "decorators": [],
          "name": "cValInterface",
          "optional": false
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 139,
          "end": 140,
          "typeName": {
            "type": "Identifier",
            "start": 139,
            "end": 140,
            "decorators": [],
            "name": "I",
            "optional": false
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 142,
      "end": 168,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 149,
        "end": 168,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 153,
            "end": 167,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 153,
              "end": 157,
              "decorators": [],
              "name": "cVal",
              "optional": false
            },
            "init": {
              "type": "NewExpression",
              "start": 160,
              "end": 167,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 164,
                "end": 165,
                "decorators": [],
                "name": "C",
                "optional": false
              }
            }
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module"
}
```
