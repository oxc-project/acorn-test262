file1.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 141,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 34,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 25,
        "end": 34,
        "raw": "\"./file2\"",
        "value": "./file2"
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 7,
          "end": 19,
          "local": {
            "type": "Identifier",
            "start": 12,
            "end": 19,
            "decorators": [],
            "name": "moduleB",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "TSDeclareFunction",
      "start": 36,
      "end": 71,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 53,
        "end": 56,
        "decorators": [],
        "name": "use",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 57,
          "end": 63,
          "decorators": [],
          "name": "v",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 58,
            "end": 63,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 60,
              "end": 63
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 64,
        "end": 70,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 66,
          "end": 70
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 73,
      "end": 92,
      "expression": {
        "type": "CallExpression",
        "start": 73,
        "end": 91,
        "arguments": [
          {
            "type": "MemberExpression",
            "start": 77,
            "end": 90,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 77,
              "end": 84,
              "decorators": [],
              "name": "moduleB",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 85,
              "end": 90,
              "decorators": [],
              "name": "value",
              "optional": false
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 73,
          "end": 76,
          "decorators": [],
          "name": "use",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 93,
      "end": 114,
      "expression": {
        "type": "CallExpression",
        "start": 93,
        "end": 113,
        "arguments": [
          {
            "type": "MemberExpression",
            "start": 97,
            "end": 112,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 97,
              "end": 104,
              "decorators": [],
              "name": "moduleB",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 105,
              "end": 112,
              "decorators": [],
              "name": "moduleC",
              "optional": false
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 93,
          "end": 96,
          "decorators": [],
          "name": "use",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 115,
      "end": 140,
      "expression": {
        "type": "CallExpression",
        "start": 115,
        "end": 139,
        "arguments": [
          {
            "type": "MemberExpression",
            "start": 119,
            "end": 138,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 119,
              "end": 126,
              "decorators": [],
              "name": "moduleB",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 127,
              "end": 138,
              "decorators": [],
              "name": "moduleCStar",
              "optional": false
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 115,
          "end": 118,
          "decorators": [],
          "name": "use",
          "optional": false
        },
        "optional": false
      }
    }
  ],
  "sourceType": "module"
}
```
file2.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 182,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 38,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 29,
        "end": 38,
        "raw": "\"./file3\"",
        "value": "./file3"
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 7,
          "end": 23,
          "local": {
            "type": "Identifier",
            "start": 12,
            "end": 23,
            "decorators": [],
            "name": "moduleCStar",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 39,
      "end": 69,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 60,
        "end": 69,
        "raw": "\"./file4\"",
        "value": "./file4"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 47,
          "end": 53,
          "imported": {
            "type": "Identifier",
            "start": 47,
            "end": 53,
            "decorators": [],
            "name": "value2",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 47,
            "end": 53,
            "decorators": [],
            "name": "value2",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 70,
      "end": 99,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 90,
        "end": 99,
        "raw": "\"./file3\"",
        "value": "./file3"
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 77,
          "end": 84,
          "local": {
            "type": "Identifier",
            "start": 77,
            "end": 84,
            "decorators": [],
            "name": "moduleC",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 100,
      "end": 129,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 120,
        "end": 129,
        "raw": "\"./file3\"",
        "value": "./file3"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 108,
          "end": 113,
          "imported": {
            "type": "Identifier",
            "start": 108,
            "end": 113,
            "decorators": [],
            "name": "value",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 108,
            "end": 113,
            "decorators": [],
            "name": "value",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 131,
      "end": 181,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 144,
          "end": 155,
          "exported": {
            "type": "Identifier",
            "start": 144,
            "end": 155,
            "decorators": [],
            "name": "moduleCStar",
            "optional": false
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 144,
            "end": 155,
            "decorators": [],
            "name": "moduleCStar",
            "optional": false
          }
        },
        {
          "type": "ExportSpecifier",
          "start": 161,
          "end": 168,
          "exported": {
            "type": "Identifier",
            "start": 161,
            "end": 168,
            "decorators": [],
            "name": "moduleC",
            "optional": false
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 161,
            "end": 168,
            "decorators": [],
            "name": "moduleC",
            "optional": false
          }
        },
        {
          "type": "ExportSpecifier",
          "start": 174,
          "end": 179,
          "exported": {
            "type": "Identifier",
            "start": 174,
            "end": 179,
            "decorators": [],
            "name": "value",
            "optional": false
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 174,
            "end": 179,
            "decorators": [],
            "name": "value",
            "optional": false
          }
        }
      ]
    }
  ],
  "sourceType": "module"
}
```
file3.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 50,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 27,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 27,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 11,
            "end": 26,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 11,
              "end": 16,
              "decorators": [],
              "name": "value",
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 19,
              "end": 26,
              "raw": "\"youpi\"",
              "value": "youpi"
            }
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 28,
      "end": 49,
      "declaration": {
        "type": "Identifier",
        "start": 43,
        "end": 48,
        "decorators": [],
        "name": "value",
        "optional": false
      },
      "exportKind": "value"
    }
  ],
  "sourceType": "module"
}
```
file4.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 24,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 24,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 24,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 11,
            "end": 23,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 11,
              "end": 17,
              "decorators": [],
              "name": "value2",
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 20,
              "end": 23,
              "raw": "\"v\"",
              "value": "v"
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
