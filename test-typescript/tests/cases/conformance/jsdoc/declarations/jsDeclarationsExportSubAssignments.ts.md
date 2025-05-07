__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 112,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 43,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 42,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 13,
            "decorators": [],
            "name": "Strings",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 16,
            "end": 42,
            "properties": [
              {
                "type": "Property",
                "start": 22,
                "end": 28,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 22,
                  "end": 23,
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
                  "start": 25,
                  "end": 28,
                  "raw": "\"A\"",
                  "value": "A",
                  "regex": null,
                  "bigint": null
                }
              },
              {
                "type": "Property",
                "start": 34,
                "end": 40,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 34,
                  "end": 35,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 37,
                  "end": 40,
                  "raw": "\"B\"",
                  "value": "B",
                  "regex": null,
                  "bigint": null
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ClassDeclaration",
      "start": 44,
      "end": 56,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 54,
        "end": 56,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 50,
        "end": 53,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 57,
      "end": 78,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 57,
        "end": 77,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 57,
          "end": 71,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 57,
            "end": 63,
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 64,
            "end": 71,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Identifier",
          "start": 74,
          "end": 77,
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 79,
      "end": 112,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 79,
        "end": 111,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 79,
          "end": 101,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 79,
            "end": 93,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 79,
              "end": 85,
              "decorators": [],
              "name": "module",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 86,
              "end": 93,
              "decorators": [],
              "name": "exports",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 94,
            "end": 101,
            "decorators": [],
            "name": "Strings",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Identifier",
          "start": 104,
          "end": 111,
          "decorators": [],
          "name": "Strings",
          "optional": false,
          "typeAnnotation": null
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
