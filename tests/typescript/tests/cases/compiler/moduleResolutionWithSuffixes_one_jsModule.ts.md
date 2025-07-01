__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "ios",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 12
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "ios",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 12
          },
          "importKind": "value",
          "start": 9,
          "end": 12
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./foo.js",
        "raw": "\"./foo.js\"",
        "start": 20,
        "end": 30
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 31
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 31
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Literal",
        "value": "use strict",
        "raw": "\"use strict\"",
        "start": 0,
        "end": 12
      },
      "directive": "use strict",
      "start": 0,
      "end": 13
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 14,
            "end": 21
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "__esModule",
            "optional": false,
            "typeAnnotation": null,
            "start": 22,
            "end": 32
          },
          "optional": false,
          "computed": false,
          "start": 14,
          "end": 32
        },
        "right": {
          "type": "Literal",
          "value": true,
          "raw": "true",
          "start": 35,
          "end": 39
        },
        "start": 14,
        "end": 39
      },
      "directive": null,
      "start": 14,
      "end": 40
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ios",
        "optional": false,
        "typeAnnotation": null,
        "start": 50,
        "end": 53
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 56,
        "end": 58
      },
      "expression": false,
      "start": 41,
      "end": 58
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 59,
            "end": 66
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "ios",
            "optional": false,
            "typeAnnotation": null,
            "start": 67,
            "end": 70
          },
          "optional": false,
          "computed": false,
          "start": 59,
          "end": 70
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "ios",
          "optional": false,
          "typeAnnotation": null,
          "start": 73,
          "end": 76
        },
        "start": 59,
        "end": 76
      },
      "directive": null,
      "start": 59,
      "end": 77
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 77
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Literal",
        "value": "use strict",
        "raw": "\"use strict\"",
        "start": 0,
        "end": 12
      },
      "directive": "use strict",
      "start": 0,
      "end": 13
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 14,
            "end": 21
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "__esModule",
            "optional": false,
            "typeAnnotation": null,
            "start": 22,
            "end": 32
          },
          "optional": false,
          "computed": false,
          "start": 14,
          "end": 32
        },
        "right": {
          "type": "Literal",
          "value": true,
          "raw": "true",
          "start": 35,
          "end": 39
        },
        "start": 14,
        "end": 39
      },
      "directive": null,
      "start": 14,
      "end": 40
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "base",
        "optional": false,
        "typeAnnotation": null,
        "start": 50,
        "end": 54
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 57,
        "end": 59
      },
      "expression": false,
      "start": 41,
      "end": 59
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 60,
            "end": 67
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "base",
            "optional": false,
            "typeAnnotation": null,
            "start": 68,
            "end": 72
          },
          "optional": false,
          "computed": false,
          "start": 60,
          "end": 72
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "base",
          "optional": false,
          "typeAnnotation": null,
          "start": 75,
          "end": 79
        },
        "start": 60,
        "end": 79
      },
      "directive": null,
      "start": 60,
      "end": 80
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 80
}
```
