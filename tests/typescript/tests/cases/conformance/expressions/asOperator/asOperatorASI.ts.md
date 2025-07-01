__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 9
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 10,
        "end": 13
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 13
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "as",
        "optional": false,
        "typeAnnotation": null,
        "start": 31,
        "end": 33
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "args",
            "optional": false,
            "typeAnnotation": null,
            "start": 37,
            "end": 41
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 43,
                "end": 46
              },
              "start": 43,
              "end": 48
            },
            "start": 41,
            "end": 48
          },
          "value": null,
          "start": 34,
          "end": 48
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 14,
      "end": 50
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 69,
            "end": 70
          },
          "init": {
            "type": "Literal",
            "value": 10,
            "raw": "10",
            "start": 73,
            "end": 75
          },
          "definite": false,
          "start": 69,
          "end": 75
        }
      ],
      "declare": false,
      "start": 65,
      "end": 75
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TaggedTemplateExpression",
        "tag": {
          "type": "Identifier",
          "decorators": [],
          "name": "as",
          "optional": false,
          "typeAnnotation": null,
          "start": 76,
          "end": 78
        },
        "typeArguments": null,
        "quasi": {
          "type": "TemplateLiteral",
          "quasis": [
            {
              "type": "TemplateElement",
              "value": {
                "raw": "Hello world",
                "cooked": "Hello world"
              },
              "tail": true,
              "start": 79,
              "end": 92
            }
          ],
          "expressions": [],
          "start": 79,
          "end": 92
        },
        "start": 76,
        "end": 92
      },
      "directive": null,
      "start": 76,
      "end": 93
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 132,
            "end": 133
          },
          "init": {
            "type": "Literal",
            "value": 20,
            "raw": "20",
            "start": 136,
            "end": 138
          },
          "definite": false,
          "start": 132,
          "end": 138
        }
      ],
      "declare": false,
      "start": 128,
      "end": 138
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "as",
          "optional": false,
          "typeAnnotation": null,
          "start": 139,
          "end": 141
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 142,
            "end": 145
          }
        ],
        "optional": false,
        "start": 139,
        "end": 146
      },
      "directive": null,
      "start": 139,
      "end": 147
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 162
}
```
