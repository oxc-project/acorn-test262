__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 162,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 13,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 10,
        "end": 13,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 9,
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
      "type": "TSDeclareFunction",
      "start": 14,
      "end": 50,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 31,
        "end": 33,
        "decorators": [],
        "name": "as",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "RestElement",
          "start": 34,
          "end": 48,
          "argument": {
            "type": "Identifier",
            "start": 37,
            "end": 41,
            "decorators": [],
            "name": "args",
            "optional": false,
            "typeAnnotation": null
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 41,
            "end": 48,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 43,
              "end": 48,
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 43,
                "end": 46
              }
            }
          },
          "value": null
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 65,
      "end": 75,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 69,
          "end": 75,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 69,
            "end": 70,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 73,
            "end": 75,
            "raw": "10",
            "value": 10,
            "regex": null,
            "bigint": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 76,
      "end": 93,
      "directive": null,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 76,
        "end": 92,
        "quasi": {
          "type": "TemplateLiteral",
          "start": 79,
          "end": 92,
          "expressions": [],
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 79,
              "end": 92,
              "tail": true,
              "value": {
                "cooked": "Hello world",
                "raw": "Hello world"
              }
            }
          ]
        },
        "tag": {
          "type": "Identifier",
          "start": 76,
          "end": 78,
          "decorators": [],
          "name": "as",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 128,
      "end": 138,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 132,
          "end": 138,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 132,
            "end": 133,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 136,
            "end": 138,
            "raw": "20",
            "value": 20,
            "regex": null,
            "bigint": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 139,
      "end": 147,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 139,
        "end": 146,
        "arguments": [
          {
            "type": "Identifier",
            "start": 142,
            "end": 145,
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 139,
          "end": 141,
          "decorators": [],
          "name": "as",
          "optional": false,
          "typeAnnotation": null
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
