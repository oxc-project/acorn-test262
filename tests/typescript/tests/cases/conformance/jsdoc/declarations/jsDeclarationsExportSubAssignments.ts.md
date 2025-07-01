__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "Strings",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 13
          },
          "init": {
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
                  "start": 22,
                  "end": 23
                },
                "value": {
                  "type": "Literal",
                  "value": "A",
                  "raw": "\"A\"",
                  "start": 25,
                  "end": 28
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 22,
                "end": 28
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 34,
                  "end": 35
                },
                "value": {
                  "type": "Literal",
                  "value": "B",
                  "raw": "\"B\"",
                  "start": 37,
                  "end": 40
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 34,
                "end": 40
              }
            ],
            "start": 16,
            "end": 42
          },
          "definite": false,
          "start": 6,
          "end": 42
        }
      ],
      "declare": false,
      "start": 0,
      "end": 43
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 50,
        "end": 53
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 54,
        "end": 56
      },
      "abstract": false,
      "declare": false,
      "start": 44,
      "end": 56
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
            "name": "module",
            "optional": false,
            "typeAnnotation": null,
            "start": 57,
            "end": 63
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 64,
            "end": 71
          },
          "optional": false,
          "computed": false,
          "start": 57,
          "end": 71
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 74,
          "end": 77
        },
        "start": 57,
        "end": 77
      },
      "directive": null,
      "start": 57,
      "end": 78
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "module",
              "optional": false,
              "typeAnnotation": null,
              "start": 79,
              "end": 85
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "exports",
              "optional": false,
              "typeAnnotation": null,
              "start": 86,
              "end": 93
            },
            "optional": false,
            "computed": false,
            "start": 79,
            "end": 93
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "Strings",
            "optional": false,
            "typeAnnotation": null,
            "start": 94,
            "end": 101
          },
          "optional": false,
          "computed": false,
          "start": 79,
          "end": 101
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "Strings",
          "optional": false,
          "typeAnnotation": null,
          "start": 104,
          "end": 111
        },
        "start": 79,
        "end": 111
      },
      "directive": null,
      "start": 79,
      "end": 112
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 112
}
```
