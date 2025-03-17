__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 93,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 32,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 13,
          "end": 14,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 16,
          "end": 17,
          "name": "b",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        {
          "type": "ObjectPattern",
          "start": 19,
          "end": 22,
          "properties": [
            {
              "type": "Property",
              "start": 20,
              "end": 21,
              "method": false,
              "shorthand": true,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 20,
                "end": 21,
                "name": "c",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "Identifier",
                "start": 20,
                "end": 21,
                "name": "c",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "init",
              "optional": false
            }
          ],
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 30,
        "end": 32,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 23,
        "end": 29,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 25,
          "end": 29
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 34,
      "end": 66,
      "id": {
        "type": "Identifier",
        "start": 43,
        "end": 46,
        "name": "bar",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 47,
          "end": 48,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 50,
          "end": 51,
          "name": "b",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        {
          "type": "ArrayPattern",
          "start": 53,
          "end": 56,
          "elements": [
            {
              "type": "Identifier",
              "start": 54,
              "end": 55,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          ],
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 64,
        "end": 66,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 57,
        "end": 63,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 59,
          "end": 63
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 68,
      "end": 79,
      "expression": {
        "type": "CallExpression",
        "start": 68,
        "end": 78,
        "callee": {
          "type": "Identifier",
          "start": 68,
          "end": 71,
          "name": "foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 72,
            "end": 74,
            "value": "",
            "raw": "\"\""
          },
          {
            "type": "Literal",
            "start": 76,
            "end": 77,
            "value": 0,
            "raw": "0"
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 81,
      "end": 92,
      "expression": {
        "type": "CallExpression",
        "start": 81,
        "end": 91,
        "callee": {
          "type": "Identifier",
          "start": 81,
          "end": 84,
          "name": "bar",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 85,
            "end": 87,
            "value": "",
            "raw": "\"\""
          },
          {
            "type": "Literal",
            "start": 89,
            "end": 90,
            "value": 0,
            "raw": "0"
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
