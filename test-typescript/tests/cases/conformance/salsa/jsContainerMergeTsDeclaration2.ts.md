__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 48,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 48,
      "body": {
        "type": "TSModuleBlock",
        "start": 20,
        "end": 48,
        "body": [
          {
            "type": "TSDeclareFunction",
            "start": 26,
            "end": 46,
            "async": false,
            "body": null,
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "start": 35,
              "end": 38,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 40,
              "end": 46,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 42,
                "end": 46
              }
            },
            "typeParameters": null
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 18,
        "end": 19,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "namespace"
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
  "end": 28,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 17,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 0,
        "end": 16,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 0,
          "end": 11,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 0,
            "end": 1,
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 2,
            "end": 11,
            "decorators": [],
            "name": "prototype",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "ObjectExpression",
          "start": 14,
          "end": 16,
          "properties": []
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 18,
      "end": 28,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 18,
        "end": 27,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 18,
          "end": 23,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 18,
            "end": 19,
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 20,
            "end": 23,
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 26,
          "end": 27,
          "raw": "2",
          "value": 2,
          "regex": null,
          "bigint": null
        }
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
