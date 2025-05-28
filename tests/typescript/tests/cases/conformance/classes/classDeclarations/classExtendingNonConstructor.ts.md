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
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 9,
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
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 12,
      "end": 46,
      "id": {
        "type": "Identifier",
        "start": 21,
        "end": 24,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 27,
        "end": 46,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 33,
            "end": 44,
            "expression": {
              "type": "AssignmentExpression",
              "start": 33,
              "end": 43,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 33,
                "end": 39,
                "object": {
                  "type": "ThisExpression",
                  "start": 33,
                  "end": 37
                },
                "property": {
                  "type": "Identifier",
                  "start": 38,
                  "end": 39,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "right": {
                "type": "Literal",
                "start": 42,
                "end": 43,
                "value": 1,
                "raw": "1"
              }
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "ClassDeclaration",
      "start": 48,
      "end": 78,
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
      "typeParameters": null,
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
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 75,
        "end": 78,
        "body": []
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 79,
      "end": 104,
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
      "typeParameters": null,
      "superClass": {
        "type": "Literal",
        "start": 96,
        "end": 100,
        "value": true,
        "raw": "true"
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 101,
        "end": 104,
        "body": []
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 105,
      "end": 131,
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
      "typeParameters": null,
      "superClass": {
        "type": "Literal",
        "start": 122,
        "end": 127,
        "value": false,
        "raw": "false"
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 128,
        "end": 131,
        "body": []
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 132,
      "end": 155,
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
      "typeParameters": null,
      "superClass": {
        "type": "Literal",
        "start": 149,
        "end": 151,
        "value": 42,
        "raw": "42"
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 152,
        "end": 155,
        "body": []
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 156,
      "end": 184,
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
      "typeParameters": null,
      "superClass": {
        "type": "Literal",
        "start": 173,
        "end": 180,
        "value": "hello",
        "raw": "\"hello\""
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 181,
        "end": 184,
        "body": []
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 185,
      "end": 207,
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
      "typeParameters": null,
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
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 204,
        "end": 207,
        "body": []
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 208,
      "end": 232,
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
      "typeParameters": null,
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
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 229,
        "end": 232,
        "body": []
      },
      "abstract": false,
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
