__ESTREE_TEST__:PASS:
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
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 25,
        "end": 34,
        "value": "./file2",
        "raw": "\"./file2\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "TSDeclareFunction",
      "start": 36,
      "end": 71,
      "id": {
        "type": "Identifier",
        "start": 53,
        "end": 56,
        "decorators": [],
        "name": "use",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
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
      },
      "body": null,
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 73,
      "end": 92,
      "expression": {
        "type": "CallExpression",
        "start": 73,
        "end": 91,
        "callee": {
          "type": "Identifier",
          "start": 73,
          "end": 76,
          "decorators": [],
          "name": "use",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "MemberExpression",
            "start": 77,
            "end": 90,
            "object": {
              "type": "Identifier",
              "start": 77,
              "end": 84,
              "decorators": [],
              "name": "moduleB",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 85,
              "end": 90,
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 93,
      "end": 114,
      "expression": {
        "type": "CallExpression",
        "start": 93,
        "end": 113,
        "callee": {
          "type": "Identifier",
          "start": 93,
          "end": 96,
          "decorators": [],
          "name": "use",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "MemberExpression",
            "start": 97,
            "end": 112,
            "object": {
              "type": "Identifier",
              "start": 97,
              "end": 104,
              "decorators": [],
              "name": "moduleB",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 105,
              "end": 112,
              "decorators": [],
              "name": "moduleC",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 115,
      "end": 140,
      "expression": {
        "type": "CallExpression",
        "start": 115,
        "end": 139,
        "callee": {
          "type": "Identifier",
          "start": 115,
          "end": 118,
          "decorators": [],
          "name": "use",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "MemberExpression",
            "start": 119,
            "end": 138,
            "object": {
              "type": "Identifier",
              "start": 119,
              "end": 126,
              "decorators": [],
              "name": "moduleB",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 127,
              "end": 138,
              "decorators": [],
              "name": "moduleCStar",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          }
        ],
        "optional": false
      },
      "directive": null
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
  "end": 182,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 38,
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
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 29,
        "end": 38,
        "value": "./file3",
        "raw": "\"./file3\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 39,
      "end": 69,
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
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 47,
            "end": 53,
            "decorators": [],
            "name": "value2",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 60,
        "end": 69,
        "value": "./file4",
        "raw": "\"./file4\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 70,
      "end": 99,
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
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 90,
        "end": 99,
        "value": "./file3",
        "raw": "\"./file3\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 100,
      "end": 129,
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
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 108,
            "end": 113,
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 120,
        "end": 129,
        "value": "./file3",
        "raw": "\"./file3\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 131,
      "end": 181,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 144,
          "end": 155,
          "local": {
            "type": "Identifier",
            "start": 144,
            "end": 155,
            "decorators": [],
            "name": "moduleCStar",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 144,
            "end": 155,
            "decorators": [],
            "name": "moduleCStar",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value"
        },
        {
          "type": "ExportSpecifier",
          "start": 161,
          "end": 168,
          "local": {
            "type": "Identifier",
            "start": 161,
            "end": 168,
            "decorators": [],
            "name": "moduleC",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 161,
            "end": 168,
            "decorators": [],
            "name": "moduleC",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value"
        },
        {
          "type": "ExportSpecifier",
          "start": 174,
          "end": 179,
          "local": {
            "type": "Identifier",
            "start": 174,
            "end": 179,
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 174,
            "end": 179,
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value"
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": []
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
  "end": 50,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 27,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 27,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 11,
            "end": 26,
            "id": {
              "type": "Identifier",
              "start": 11,
              "end": 16,
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 19,
              "end": 26,
              "value": "youpi",
              "raw": "\"youpi\""
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
        "optional": false,
        "typeAnnotation": null
      },
      "exportKind": "value"
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
  "end": 24,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 24,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 24,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 11,
            "end": 23,
            "id": {
              "type": "Identifier",
              "start": 11,
              "end": 17,
              "decorators": [],
              "name": "value2",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 20,
              "end": 23,
              "value": "v",
              "raw": "\"v\""
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
  ],
  "sourceType": "module",
  "hashbang": null
}
```
