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
          "definite": false,
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
          "init": null
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ClassDeclaration",
      "start": 18,
      "end": 64,
      "abstract": false,
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
                "directive": null,
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
                    "raw": "1",
                    "value": 1
                  }
                }
              }
            ]
          }
        ]
      },
      "declare": false,
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
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 66,
      "end": 82,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 66,
        "end": 82,
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
        "callee": {
          "type": "MemberExpression",
          "start": 66,
          "end": 77,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 66,
            "end": 73,
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 74,
            "end": 77,
            "decorators": [],
            "name": "log",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
