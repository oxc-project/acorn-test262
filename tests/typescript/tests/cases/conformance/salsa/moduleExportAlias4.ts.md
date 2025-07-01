__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "wat",
            "optional": false,
            "typeAnnotation": null,
            "start": 14,
            "end": 17
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "require",
              "optional": false,
              "typeAnnotation": null,
              "start": 20,
              "end": 27
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "./bug24024",
                "raw": "'./bug24024'",
                "start": 28,
                "end": 40
              }
            ],
            "optional": false,
            "start": 20,
            "end": 41
          },
          "definite": false,
          "start": 14,
          "end": 41
        }
      ],
      "declare": false,
      "start": 10,
      "end": 41
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
            "start": 42,
            "end": 48
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 49,
            "end": 56
          },
          "optional": false,
          "computed": false,
          "start": 42,
          "end": 56
        },
        "right": {
          "type": "ClassExpression",
          "decorators": [],
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null,
            "start": 65,
            "end": 66
          },
          "typeParameters": null,
          "superClass": null,
          "superTypeArguments": null,
          "implements": [],
          "body": {
            "type": "ClassBody",
            "body": [],
            "start": 67,
            "end": 69
          },
          "abstract": false,
          "declare": false,
          "start": 59,
          "end": 69
        },
        "start": 42,
        "end": 69
      },
      "directive": null,
      "start": 42,
      "end": 69
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
              "start": 70,
              "end": 76
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "exports",
              "optional": false,
              "typeAnnotation": null,
              "start": 77,
              "end": 84
            },
            "optional": false,
            "computed": false,
            "start": 70,
            "end": 84
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "D",
            "optional": false,
            "typeAnnotation": null,
            "start": 85,
            "end": 86
          },
          "optional": false,
          "computed": false,
          "start": 70,
          "end": 86
        },
        "right": {
          "type": "ClassExpression",
          "decorators": [],
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "D",
            "optional": false,
            "typeAnnotation": null,
            "start": 95,
            "end": 96
          },
          "typeParameters": null,
          "superClass": null,
          "superTypeArguments": null,
          "implements": [],
          "body": {
            "type": "ClassBody",
            "body": [],
            "start": 97,
            "end": 100
          },
          "abstract": false,
          "declare": false,
          "start": 89,
          "end": 100
        },
        "start": 70,
        "end": 100
      },
      "directive": null,
      "start": 70,
      "end": 100
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 10,
  "end": 100
}
```
