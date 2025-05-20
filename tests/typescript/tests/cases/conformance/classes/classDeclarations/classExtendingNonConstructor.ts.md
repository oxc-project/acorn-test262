__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 232,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 10,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 9,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 9,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5,
              "end": 9,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 7,
                "end": 9,
                "members": []
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "FunctionDeclaration",
      "start": 12,
      "end": 46,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 27,
        "end": 46,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 33,
            "end": 44,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 33,
              "end": 43,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 33,
                "end": 39,
                "computed": false,
                "object": {
                  "type": "ThisExpression",
                  "start": 33,
                  "end": 37
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 38,
                  "end": 39,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "right": {
                "type": "Literal",
                "start": 42,
                "end": 43,
                "raw": "1",
                "value": 1
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 21,
        "end": 24,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 48,
      "end": 78,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 75,
        "end": 78,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 54,
        "end": 56,
        "decorators": [],
        "name": "C1",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 65,
        "end": 74,
        "decorators": [],
        "name": "undefined",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 79,
      "end": 104,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 101,
        "end": 104,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 85,
        "end": 87,
        "decorators": [],
        "name": "C2",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Literal",
        "start": 96,
        "end": 100,
        "raw": "true",
        "value": true
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 105,
      "end": 131,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 128,
        "end": 131,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 111,
        "end": 113,
        "decorators": [],
        "name": "C3",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Literal",
        "start": 122,
        "end": 127,
        "raw": "false",
        "value": false
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 132,
      "end": 155,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 152,
        "end": 155,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 138,
        "end": 140,
        "decorators": [],
        "name": "C4",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Literal",
        "start": 149,
        "end": 151,
        "raw": "42",
        "value": 42
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 156,
      "end": 184,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 181,
        "end": 184,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 162,
        "end": 164,
        "decorators": [],
        "name": "C5",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Literal",
        "start": 173,
        "end": 180,
        "raw": "\"hello\"",
        "value": "hello"
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 185,
      "end": 207,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 204,
        "end": 207,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 191,
        "end": 193,
        "decorators": [],
        "name": "C6",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 202,
        "end": 203,
        "decorators": [],
        "name": "x",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 208,
      "end": 232,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 229,
        "end": 232,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 214,
        "end": 216,
        "decorators": [],
        "name": "C7",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 225,
        "end": 228,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
