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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 15,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 15,
            "name": "foo",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 7,
              "end": 15,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 9,
                "end": 15
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 18,
      "end": 64,
      "id": {
        "type": "Identifier",
        "start": 24,
        "end": 25,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
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
                    "name": "foo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
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
            "name": "console",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 74,
            "end": 77,
            "name": "log",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 78,
            "end": 81,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
