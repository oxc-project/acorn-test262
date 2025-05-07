__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 53,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 34,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 23,
        "end": 33,
        "raw": "\"../debug\"",
        "value": "../debug",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 7,
          "end": 17,
          "local": {
            "type": "Identifier",
            "start": 12,
            "end": 17,
            "decorators": [],
            "name": "Debug",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 35,
      "end": 52,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 44,
          "end": 49,
          "exported": {
            "type": "Identifier",
            "start": 44,
            "end": 49,
            "decorators": [],
            "name": "Debug",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 44,
            "end": 49,
            "decorators": [],
            "name": "Debug",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
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
  "end": 74,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 72,
      "attributes": [],
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 7,
        "end": 72,
        "async": false,
        "body": null,
        "declare": true,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 24,
          "end": 30,
          "decorators": [],
          "name": "assert",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [
          {
            "type": "Identifier",
            "start": 31,
            "end": 50,
            "decorators": [],
            "name": "expression",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 41,
              "end": 50,
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 43,
                "end": 50
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 51,
          "end": 71,
          "typeAnnotation": {
            "type": "TSTypePredicate",
            "start": 53,
            "end": 71,
            "asserts": true,
            "parameterName": {
              "type": "Identifier",
              "start": 61,
              "end": 71,
              "decorators": [],
              "name": "expression",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null
          }
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
  "end": 127,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 39,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 20,
        "end": 38,
        "raw": "\"./_namespaces/ts\"",
        "value": "./_namespaces/ts",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 7,
          "end": 14,
          "local": {
            "type": "Identifier",
            "start": 12,
            "end": 14,
            "decorators": [],
            "name": "ts",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 40,
      "end": 81,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 62,
        "end": 80,
        "raw": "\"./_namespaces/ts\"",
        "value": "./_namespaces/ts",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 49,
          "end": 54,
          "imported": {
            "type": "Identifier",
            "start": 49,
            "end": 54,
            "decorators": [],
            "name": "Debug",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 49,
            "end": 54,
            "decorators": [],
            "name": "Debug",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 83,
      "end": 105,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 83,
        "end": 104,
        "arguments": [
          {
            "type": "Literal",
            "start": 99,
            "end": 103,
            "raw": "true",
            "value": true,
            "regex": null,
            "bigint": null
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 83,
          "end": 98,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 83,
            "end": 91,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 83,
              "end": 85,
              "decorators": [],
              "name": "ts",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 86,
              "end": 91,
              "decorators": [],
              "name": "Debug",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 92,
            "end": 98,
            "decorators": [],
            "name": "assert",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 106,
      "end": 125,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 106,
        "end": 124,
        "arguments": [
          {
            "type": "Literal",
            "start": 119,
            "end": 123,
            "raw": "true",
            "value": true,
            "regex": null,
            "bigint": null
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 106,
          "end": 118,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 106,
            "end": 111,
            "decorators": [],
            "name": "Debug",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 112,
            "end": 118,
            "decorators": [],
            "name": "assert",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
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
  "end": 43,
  "body": [
    {
      "type": "ExportAllDeclaration",
      "start": 0,
      "end": 41,
      "attributes": [],
      "exported": null,
      "exportKind": "value",
      "source": {
        "type": "Literal",
        "start": 14,
        "end": 41,
        "raw": "\"../../core/_namespaces/ts\"",
        "value": "../../core/_namespaces/ts",
        "regex": null,
        "bigint": null
      }
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
  "end": 125,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 39,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 20,
        "end": 38,
        "raw": "\"./_namespaces/ts\"",
        "value": "./_namespaces/ts",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 7,
          "end": 14,
          "local": {
            "type": "Identifier",
            "start": 12,
            "end": 14,
            "decorators": [],
            "name": "ts",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 40,
      "end": 81,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 62,
        "end": 80,
        "raw": "\"./_namespaces/ts\"",
        "value": "./_namespaces/ts",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 49,
          "end": 54,
          "imported": {
            "type": "Identifier",
            "start": 49,
            "end": 54,
            "decorators": [],
            "name": "Debug",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 49,
            "end": 54,
            "decorators": [],
            "name": "Debug",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 83,
      "end": 105,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 83,
        "end": 104,
        "arguments": [
          {
            "type": "Literal",
            "start": 99,
            "end": 103,
            "raw": "true",
            "value": true,
            "regex": null,
            "bigint": null
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 83,
          "end": 98,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 83,
            "end": 91,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 83,
              "end": 85,
              "decorators": [],
              "name": "ts",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 86,
              "end": 91,
              "decorators": [],
              "name": "Debug",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 92,
            "end": 98,
            "decorators": [],
            "name": "assert",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 106,
      "end": 125,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 106,
        "end": 124,
        "arguments": [
          {
            "type": "Literal",
            "start": 119,
            "end": 123,
            "raw": "true",
            "value": true,
            "regex": null,
            "bigint": null
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 106,
          "end": 118,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 106,
            "end": 111,
            "decorators": [],
            "name": "Debug",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 112,
            "end": 118,
            "decorators": [],
            "name": "assert",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
