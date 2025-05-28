__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 82,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 16,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 15,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 15,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 7,
              "end": 15,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 9,
                "end": 15
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 18,
      "end": 64,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 24,
        "end": 25,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 26,
        "end": 64,
        "body": [
          {
            "type": "StaticBlock",
            "start": 32,
            "end": 62,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 49,
                "end": 56,
                "expression": {
                  "type": "AssignmentExpression",
                  "start": 49,
                  "end": 56,
                  "operator": "=",
                  "left": {
                    "type": "Identifier",
                    "start": 49,
                    "end": 52,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Literal",
                    "start": 55,
                    "end": 56,
                    "value": 1,
                    "raw": "1"
                  }
                },
                "directive": null
              }
            ]
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 66,
      "end": 82,
      "expression": {
        "type": "CallExpression",
        "start": 66,
        "end": 82,
        "callee": {
          "type": "MemberExpression",
          "start": 66,
          "end": 77,
          "object": {
            "type": "Identifier",
            "start": 66,
            "end": 73,
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 74,
            "end": 77,
            "decorators": [],
            "name": "log",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "start": 78,
            "end": 81,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
