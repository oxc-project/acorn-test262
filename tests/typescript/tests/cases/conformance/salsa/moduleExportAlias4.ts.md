__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 10,
  "end": 100,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 10,
      "end": 41,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 14,
          "end": 41,
          "id": {
            "type": "Identifier",
            "start": 14,
            "end": 17,
            "decorators": [],
            "name": "wat",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 20,
            "end": 41,
            "callee": {
              "type": "Identifier",
              "start": 20,
              "end": 27,
              "decorators": [],
              "name": "require",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 28,
                "end": 40,
                "value": "./bug24024",
                "raw": "'./bug24024'"
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 42,
      "end": 69,
      "expression": {
        "type": "AssignmentExpression",
        "start": 42,
        "end": 69,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 42,
          "end": 56,
          "object": {
            "type": "Identifier",
            "start": 42,
            "end": 48,
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 49,
            "end": 56,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "ClassExpression",
          "start": 59,
          "end": 69,
          "decorators": [],
          "id": {
            "type": "Identifier",
            "start": 65,
            "end": 66,
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
            "start": 67,
            "end": 69,
            "body": []
          },
          "abstract": false,
          "declare": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 70,
      "end": 100,
      "expression": {
        "type": "AssignmentExpression",
        "start": 70,
        "end": 100,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 70,
          "end": 86,
          "object": {
            "type": "MemberExpression",
            "start": 70,
            "end": 84,
            "object": {
              "type": "Identifier",
              "start": 70,
              "end": 76,
              "decorators": [],
              "name": "module",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 77,
              "end": 84,
              "decorators": [],
              "name": "exports",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "property": {
            "type": "Identifier",
            "start": 85,
            "end": 86,
            "decorators": [],
            "name": "D",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "ClassExpression",
          "start": 89,
          "end": 100,
          "decorators": [],
          "id": {
            "type": "Identifier",
            "start": 95,
            "end": 96,
            "decorators": [],
            "name": "D",
            "optional": false,
            "typeAnnotation": null
          },
          "typeParameters": null,
          "superClass": null,
          "superTypeArguments": null,
          "implements": [],
          "body": {
            "type": "ClassBody",
            "start": 97,
            "end": 100,
            "body": []
          },
          "abstract": false,
          "declare": false
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
