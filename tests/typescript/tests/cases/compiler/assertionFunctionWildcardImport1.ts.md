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
      ],
      "source": {
        "type": "Literal",
        "start": 23,
        "end": 33,
        "value": "../debug",
        "raw": "\"../debug\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 35,
      "end": 52,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 44,
          "end": 49,
          "local": {
            "type": "Identifier",
            "start": 44,
            "end": 49,
            "decorators": [],
            "name": "Debug",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 44,
            "end": 49,
            "decorators": [],
            "name": "Debug",
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
  "end": 74,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 72,
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 7,
        "end": 72,
        "id": {
          "type": "Identifier",
          "start": 24,
          "end": 30,
          "decorators": [],
          "name": "assert",
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
            "parameterName": {
              "type": "Identifier",
              "start": 61,
              "end": 71,
              "decorators": [],
              "name": "expression",
              "optional": false,
              "typeAnnotation": null
            },
            "asserts": true,
            "typeAnnotation": null
          }
        },
        "body": null,
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
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
  "end": 127,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 39,
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
      ],
      "source": {
        "type": "Literal",
        "start": 20,
        "end": 38,
        "value": "./_namespaces/ts",
        "raw": "\"./_namespaces/ts\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 40,
      "end": 81,
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
          "local": {
            "type": "Identifier",
            "start": 49,
            "end": 54,
            "decorators": [],
            "name": "Debug",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 62,
        "end": 80,
        "value": "./_namespaces/ts",
        "raw": "\"./_namespaces/ts\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 83,
      "end": 105,
      "expression": {
        "type": "CallExpression",
        "start": 83,
        "end": 104,
        "callee": {
          "type": "MemberExpression",
          "start": 83,
          "end": 98,
          "object": {
            "type": "MemberExpression",
            "start": 83,
            "end": 91,
            "object": {
              "type": "Identifier",
              "start": 83,
              "end": 85,
              "decorators": [],
              "name": "ts",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 86,
              "end": 91,
              "decorators": [],
              "name": "Debug",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "property": {
            "type": "Identifier",
            "start": 92,
            "end": 98,
            "decorators": [],
            "name": "assert",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 99,
            "end": 103,
            "value": true,
            "raw": "true"
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 106,
      "end": 125,
      "expression": {
        "type": "CallExpression",
        "start": 106,
        "end": 124,
        "callee": {
          "type": "MemberExpression",
          "start": 106,
          "end": 118,
          "object": {
            "type": "Identifier",
            "start": 106,
            "end": 111,
            "decorators": [],
            "name": "Debug",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 112,
            "end": 118,
            "decorators": [],
            "name": "assert",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 119,
            "end": 123,
            "value": true,
            "raw": "true"
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
  "end": 43,
  "body": [
    {
      "type": "ExportAllDeclaration",
      "start": 0,
      "end": 41,
      "exported": null,
      "source": {
        "type": "Literal",
        "start": 14,
        "end": 41,
        "value": "../../core/_namespaces/ts",
        "raw": "\"../../core/_namespaces/ts\""
      },
      "attributes": [],
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
  "end": 125,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 39,
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
      ],
      "source": {
        "type": "Literal",
        "start": 20,
        "end": 38,
        "value": "./_namespaces/ts",
        "raw": "\"./_namespaces/ts\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 40,
      "end": 81,
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
          "local": {
            "type": "Identifier",
            "start": 49,
            "end": 54,
            "decorators": [],
            "name": "Debug",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 62,
        "end": 80,
        "value": "./_namespaces/ts",
        "raw": "\"./_namespaces/ts\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 83,
      "end": 105,
      "expression": {
        "type": "CallExpression",
        "start": 83,
        "end": 104,
        "callee": {
          "type": "MemberExpression",
          "start": 83,
          "end": 98,
          "object": {
            "type": "MemberExpression",
            "start": 83,
            "end": 91,
            "object": {
              "type": "Identifier",
              "start": 83,
              "end": 85,
              "decorators": [],
              "name": "ts",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 86,
              "end": 91,
              "decorators": [],
              "name": "Debug",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "property": {
            "type": "Identifier",
            "start": 92,
            "end": 98,
            "decorators": [],
            "name": "assert",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 99,
            "end": 103,
            "value": true,
            "raw": "true"
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 106,
      "end": 125,
      "expression": {
        "type": "CallExpression",
        "start": 106,
        "end": 124,
        "callee": {
          "type": "MemberExpression",
          "start": 106,
          "end": 118,
          "object": {
            "type": "Identifier",
            "start": 106,
            "end": 111,
            "decorators": [],
            "name": "Debug",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 112,
            "end": 118,
            "decorators": [],
            "name": "assert",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 119,
            "end": 123,
            "value": true,
            "raw": "true"
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
