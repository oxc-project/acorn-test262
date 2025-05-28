__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 31,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 31,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 12,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 12,
            "decorators": [],
            "name": "ios",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 12,
            "decorators": [],
            "name": "ios",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 20,
        "end": 30,
        "value": "./foo.js",
        "raw": "\"./foo.js\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
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
  "end": 77,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 13,
      "expression": {
        "type": "Literal",
        "start": 0,
        "end": 12,
        "value": "use strict",
        "raw": "\"use strict\""
      },
      "directive": "use strict"
    },
    {
      "type": "ExpressionStatement",
      "start": 14,
      "end": 40,
      "expression": {
        "type": "AssignmentExpression",
        "start": 14,
        "end": 39,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 14,
          "end": 32,
          "object": {
            "type": "Identifier",
            "start": 14,
            "end": 21,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 22,
            "end": 32,
            "decorators": [],
            "name": "__esModule",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Literal",
          "start": 35,
          "end": 39,
          "value": true,
          "raw": "true"
        }
      },
      "directive": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 41,
      "end": 58,
      "id": {
        "type": "Identifier",
        "start": 50,
        "end": 53,
        "decorators": [],
        "name": "ios",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 56,
        "end": 58,
        "body": []
      },
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 59,
      "end": 77,
      "expression": {
        "type": "AssignmentExpression",
        "start": 59,
        "end": 76,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 59,
          "end": 70,
          "object": {
            "type": "Identifier",
            "start": 59,
            "end": 66,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 67,
            "end": 70,
            "decorators": [],
            "name": "ios",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Identifier",
          "start": 73,
          "end": 76,
          "decorators": [],
          "name": "ios",
          "optional": false,
          "typeAnnotation": null
        }
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
  "end": 80,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 13,
      "expression": {
        "type": "Literal",
        "start": 0,
        "end": 12,
        "value": "use strict",
        "raw": "\"use strict\""
      },
      "directive": "use strict"
    },
    {
      "type": "ExpressionStatement",
      "start": 14,
      "end": 40,
      "expression": {
        "type": "AssignmentExpression",
        "start": 14,
        "end": 39,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 14,
          "end": 32,
          "object": {
            "type": "Identifier",
            "start": 14,
            "end": 21,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 22,
            "end": 32,
            "decorators": [],
            "name": "__esModule",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Literal",
          "start": 35,
          "end": 39,
          "value": true,
          "raw": "true"
        }
      },
      "directive": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 41,
      "end": 59,
      "id": {
        "type": "Identifier",
        "start": 50,
        "end": 54,
        "decorators": [],
        "name": "base",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 57,
        "end": 59,
        "body": []
      },
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 60,
      "end": 80,
      "expression": {
        "type": "AssignmentExpression",
        "start": 60,
        "end": 79,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 60,
          "end": 72,
          "object": {
            "type": "Identifier",
            "start": 60,
            "end": 67,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 68,
            "end": 72,
            "decorators": [],
            "name": "base",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Identifier",
          "start": 75,
          "end": 79,
          "decorators": [],
          "name": "base",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
