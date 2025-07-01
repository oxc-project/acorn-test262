__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Debug",
            "optional": false,
            "typeAnnotation": null,
            "start": 12,
            "end": 17
          },
          "start": 7,
          "end": 17
        }
      ],
      "source": {
        "type": "Literal",
        "value": "../debug",
        "raw": "\"../debug\"",
        "start": 23,
        "end": 33
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 34
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Debug",
            "optional": false,
            "typeAnnotation": null,
            "start": 44,
            "end": 49
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "Debug",
            "optional": false,
            "typeAnnotation": null,
            "start": 44,
            "end": 49
          },
          "exportKind": "value",
          "start": 44,
          "end": 49
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 35,
      "end": 52
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 53
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSDeclareFunction",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "assert",
          "optional": false,
          "typeAnnotation": null,
          "start": 24,
          "end": 30
        },
        "generator": false,
        "async": false,
        "declare": true,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "expression",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 43,
                "end": 50
              },
              "start": 41,
              "end": 50
            },
            "start": 31,
            "end": 50
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypePredicate",
            "parameterName": {
              "type": "Identifier",
              "decorators": [],
              "name": "expression",
              "optional": false,
              "typeAnnotation": null,
              "start": 61,
              "end": 71
            },
            "asserts": true,
            "typeAnnotation": null,
            "start": 53,
            "end": 71
          },
          "start": 51,
          "end": 71
        },
        "body": null,
        "expression": false,
        "start": 7,
        "end": 72
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 72
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 74
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "ts",
            "optional": false,
            "typeAnnotation": null,
            "start": 12,
            "end": 14
          },
          "start": 7,
          "end": 14
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./_namespaces/ts",
        "raw": "\"./_namespaces/ts\"",
        "start": 20,
        "end": 38
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 39
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "Debug",
            "optional": false,
            "typeAnnotation": null,
            "start": 49,
            "end": 54
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Debug",
            "optional": false,
            "typeAnnotation": null,
            "start": 49,
            "end": 54
          },
          "importKind": "value",
          "start": 49,
          "end": 54
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./_namespaces/ts",
        "raw": "\"./_namespaces/ts\"",
        "start": 62,
        "end": 80
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 40,
      "end": 81
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "ts",
              "optional": false,
              "typeAnnotation": null,
              "start": 83,
              "end": 85
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "Debug",
              "optional": false,
              "typeAnnotation": null,
              "start": 86,
              "end": 91
            },
            "optional": false,
            "computed": false,
            "start": 83,
            "end": 91
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "assert",
            "optional": false,
            "typeAnnotation": null,
            "start": 92,
            "end": 98
          },
          "optional": false,
          "computed": false,
          "start": 83,
          "end": 98
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 99,
            "end": 103
          }
        ],
        "optional": false,
        "start": 83,
        "end": 104
      },
      "directive": null,
      "start": 83,
      "end": 105
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Debug",
            "optional": false,
            "typeAnnotation": null,
            "start": 106,
            "end": 111
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "assert",
            "optional": false,
            "typeAnnotation": null,
            "start": 112,
            "end": 118
          },
          "optional": false,
          "computed": false,
          "start": 106,
          "end": 118
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 119,
            "end": 123
          }
        ],
        "optional": false,
        "start": 106,
        "end": 124
      },
      "directive": null,
      "start": 106,
      "end": 125
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 127
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportAllDeclaration",
      "exported": null,
      "source": {
        "type": "Literal",
        "value": "../../core/_namespaces/ts",
        "raw": "\"../../core/_namespaces/ts\"",
        "start": 14,
        "end": 41
      },
      "attributes": [],
      "exportKind": "value",
      "start": 0,
      "end": 41
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 43
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "ts",
            "optional": false,
            "typeAnnotation": null,
            "start": 12,
            "end": 14
          },
          "start": 7,
          "end": 14
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./_namespaces/ts",
        "raw": "\"./_namespaces/ts\"",
        "start": 20,
        "end": 38
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 39
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "Debug",
            "optional": false,
            "typeAnnotation": null,
            "start": 49,
            "end": 54
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Debug",
            "optional": false,
            "typeAnnotation": null,
            "start": 49,
            "end": 54
          },
          "importKind": "value",
          "start": 49,
          "end": 54
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./_namespaces/ts",
        "raw": "\"./_namespaces/ts\"",
        "start": 62,
        "end": 80
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 40,
      "end": 81
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "ts",
              "optional": false,
              "typeAnnotation": null,
              "start": 83,
              "end": 85
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "Debug",
              "optional": false,
              "typeAnnotation": null,
              "start": 86,
              "end": 91
            },
            "optional": false,
            "computed": false,
            "start": 83,
            "end": 91
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "assert",
            "optional": false,
            "typeAnnotation": null,
            "start": 92,
            "end": 98
          },
          "optional": false,
          "computed": false,
          "start": 83,
          "end": 98
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 99,
            "end": 103
          }
        ],
        "optional": false,
        "start": 83,
        "end": 104
      },
      "directive": null,
      "start": 83,
      "end": 105
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Debug",
            "optional": false,
            "typeAnnotation": null,
            "start": 106,
            "end": 111
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "assert",
            "optional": false,
            "typeAnnotation": null,
            "start": 112,
            "end": 118
          },
          "optional": false,
          "computed": false,
          "start": 106,
          "end": 118
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 119,
            "end": 123
          }
        ],
        "optional": false,
        "start": 106,
        "end": 124
      },
      "directive": null,
      "start": 106,
      "end": 125
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 125
}
```
