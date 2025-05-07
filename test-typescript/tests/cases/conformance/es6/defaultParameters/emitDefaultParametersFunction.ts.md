__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 139,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 35,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 32,
        "end": 35,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 13,
          "end": 22,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 14,
            "end": 22,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 16,
              "end": 22
            }
          }
        },
        {
          "type": "AssignmentPattern",
          "start": 24,
          "end": 30,
          "decorators": [],
          "left": {
            "type": "Identifier",
            "start": 24,
            "end": 25,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "right": {
            "type": "Literal",
            "start": 28,
            "end": 30,
            "raw": "10",
            "value": 10,
            "regex": null,
            "bigint": null
          },
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 36,
      "end": 79,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 76,
        "end": 79,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 45,
        "end": 48,
        "decorators": [],
        "name": "baz",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 49,
          "end": 58,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 50,
            "end": 58,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 52,
              "end": 58
            }
          }
        },
        {
          "type": "AssignmentPattern",
          "start": 60,
          "end": 65,
          "decorators": [],
          "left": {
            "type": "Identifier",
            "start": 60,
            "end": 61,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "right": {
            "type": "Literal",
            "start": 64,
            "end": 65,
            "raw": "5",
            "value": 5,
            "regex": null,
            "bigint": null
          },
          "typeAnnotation": null
        },
        {
          "type": "RestElement",
          "start": 67,
          "end": 74,
          "argument": {
            "type": "Identifier",
            "start": 70,
            "end": 74,
            "decorators": [],
            "name": "rest",
            "optional": false,
            "typeAnnotation": null
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": null,
          "value": null
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 80,
      "end": 104,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 101,
        "end": 104,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 89,
        "end": 92,
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 93,
          "end": 99,
          "decorators": [],
          "left": {
            "type": "Identifier",
            "start": 93,
            "end": 94,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "right": {
            "type": "Literal",
            "start": 97,
            "end": 99,
            "raw": "10",
            "value": 10,
            "regex": null,
            "bigint": null
          },
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 105,
      "end": 139,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 136,
        "end": 139,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 114,
        "end": 118,
        "decorators": [],
        "name": "bar1",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 119,
          "end": 125,
          "decorators": [],
          "left": {
            "type": "Identifier",
            "start": 119,
            "end": 120,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "right": {
            "type": "Literal",
            "start": 123,
            "end": 125,
            "raw": "10",
            "value": 10,
            "regex": null,
            "bigint": null
          },
          "typeAnnotation": null
        },
        {
          "type": "RestElement",
          "start": 127,
          "end": 134,
          "argument": {
            "type": "Identifier",
            "start": 130,
            "end": 134,
            "decorators": [],
            "name": "rest",
            "optional": false,
            "typeAnnotation": null
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": null,
          "value": null
        }
      ],
      "returnType": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
