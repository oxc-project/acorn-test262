__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "ObjectExpression",
        "properties": [
          {
            "type": "Property",
            "kind": "init",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 17,
              "end": 18
            },
            "value": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 20,
              "end": 21
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 17,
            "end": 21
          }
        ],
        "start": 15,
        "end": 23
      },
      "exportKind": "value",
      "start": 0,
      "end": 24
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 25
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "ObjectExpression",
        "properties": [
          {
            "type": "Property",
            "kind": "init",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "aIndex",
              "optional": false,
              "typeAnnotation": null,
              "start": 17,
              "end": 23
            },
            "value": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 25,
              "end": 26
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 17,
            "end": 26
          }
        ],
        "start": 15,
        "end": 28
      },
      "exportKind": "value",
      "start": 0,
      "end": 29
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 30
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
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 7,
            "end": 8
          },
          "start": 7,
          "end": 8
        }
      ],
      "source": {
        "type": "Literal",
        "value": ".",
        "raw": "\".\"",
        "start": 14,
        "end": 17
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 18
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "aIndex",
            "optional": false,
            "typeAnnotation": null,
            "start": 26,
            "end": 32
          },
          "start": 26,
          "end": 32
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./",
        "raw": "\"./\"",
        "start": 38,
        "end": 42
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 19,
      "end": 43
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 44,
          "end": 45
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 46,
          "end": 47
        },
        "optional": false,
        "computed": false,
        "start": 44,
        "end": 47
      },
      "directive": null,
      "start": 44,
      "end": 48
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "aIndex",
          "optional": false,
          "typeAnnotation": null,
          "start": 49,
          "end": 55
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "aIndex",
          "optional": false,
          "typeAnnotation": null,
          "start": 56,
          "end": 62
        },
        "optional": false,
        "computed": false,
        "start": 49,
        "end": 62
      },
      "directive": null,
      "start": 49,
      "end": 63
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 64
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
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 7,
            "end": 8
          },
          "start": 7,
          "end": 8
        }
      ],
      "source": {
        "type": "Literal",
        "value": "..",
        "raw": "\"..\"",
        "start": 14,
        "end": 18
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 19
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "aIndex",
            "optional": false,
            "typeAnnotation": null,
            "start": 27,
            "end": 33
          },
          "start": 27,
          "end": 33
        }
      ],
      "source": {
        "type": "Literal",
        "value": "../",
        "raw": "\"../\"",
        "start": 39,
        "end": 44
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 20,
      "end": 45
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 46,
          "end": 47
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 48,
          "end": 49
        },
        "optional": false,
        "computed": false,
        "start": 46,
        "end": 49
      },
      "directive": null,
      "start": 46,
      "end": 50
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "aIndex",
          "optional": false,
          "typeAnnotation": null,
          "start": 51,
          "end": 57
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "aIndex",
          "optional": false,
          "typeAnnotation": null,
          "start": 58,
          "end": 64
        },
        "optional": false,
        "computed": false,
        "start": 51,
        "end": 64
      },
      "directive": null,
      "start": 51,
      "end": 65
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 65
}
```
