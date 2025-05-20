__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 25,
  "body": [
    {
      "type": "ExportDefaultDeclaration",
      "start": 0,
      "end": 24,
      "declaration": {
        "type": "ObjectExpression",
        "start": 15,
        "end": 23,
        "properties": [
          {
            "type": "Property",
            "start": 17,
            "end": 21,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 17,
              "end": 18,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "init",
            "method": false,
            "optional": false,
            "shorthand": false,
            "value": {
              "type": "Literal",
              "start": 20,
              "end": 21,
              "raw": "0",
              "value": 0
            }
          }
        ]
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
  "end": 30,
  "body": [
    {
      "type": "ExportDefaultDeclaration",
      "start": 0,
      "end": 29,
      "declaration": {
        "type": "ObjectExpression",
        "start": 15,
        "end": 28,
        "properties": [
          {
            "type": "Property",
            "start": 17,
            "end": 26,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 17,
              "end": 23,
              "decorators": [],
              "name": "aIndex",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "init",
            "method": false,
            "optional": false,
            "shorthand": false,
            "value": {
              "type": "Literal",
              "start": 25,
              "end": 26,
              "raw": "0",
              "value": 0
            }
          }
        ]
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
  "end": 64,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 18,
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 14,
        "end": 17,
        "raw": "\".\"",
        "value": "."
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 7,
          "end": 8,
          "local": {
            "type": "Identifier",
            "start": 7,
            "end": 8,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "phase": null,
      "attributes": []
    },
    {
      "type": "ImportDeclaration",
      "start": 19,
      "end": 43,
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 38,
        "end": 42,
        "raw": "\"./\"",
        "value": "./"
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 26,
          "end": 32,
          "local": {
            "type": "Identifier",
            "start": 26,
            "end": 32,
            "decorators": [],
            "name": "aIndex",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "phase": null,
      "attributes": []
    },
    {
      "type": "ExpressionStatement",
      "start": 44,
      "end": 48,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 44,
        "end": 47,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 44,
          "end": 45,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 46,
          "end": 47,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 49,
      "end": 63,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 49,
        "end": 62,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 49,
          "end": 55,
          "decorators": [],
          "name": "aIndex",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 56,
          "end": 62,
          "decorators": [],
          "name": "aIndex",
          "optional": false,
          "typeAnnotation": null
        }
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
  "end": 65,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 19,
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 14,
        "end": 18,
        "raw": "\"..\"",
        "value": ".."
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 7,
          "end": 8,
          "local": {
            "type": "Identifier",
            "start": 7,
            "end": 8,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "phase": null,
      "attributes": []
    },
    {
      "type": "ImportDeclaration",
      "start": 20,
      "end": 45,
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 39,
        "end": 44,
        "raw": "\"../\"",
        "value": "../"
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 27,
          "end": 33,
          "local": {
            "type": "Identifier",
            "start": 27,
            "end": 33,
            "decorators": [],
            "name": "aIndex",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "phase": null,
      "attributes": []
    },
    {
      "type": "ExpressionStatement",
      "start": 46,
      "end": 50,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 46,
        "end": 49,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 46,
          "end": 47,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 48,
          "end": 49,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 51,
      "end": 65,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 51,
        "end": 64,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 51,
          "end": 57,
          "decorators": [],
          "name": "aIndex",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 58,
          "end": 64,
          "decorators": [],
          "name": "aIndex",
          "optional": false,
          "typeAnnotation": null
        }
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
