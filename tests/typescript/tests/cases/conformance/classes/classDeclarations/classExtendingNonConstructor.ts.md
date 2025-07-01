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
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [],
                "start": 7,
                "end": 9
              },
              "start": 5,
              "end": 9
            },
            "start": 4,
            "end": 9
          },
          "init": null,
          "definite": false,
          "start": 4,
          "end": 9
        }
      ],
      "declare": false,
      "start": 0,
      "end": 10
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 21,
        "end": 24
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "ThisExpression",
                  "start": 33,
                  "end": 37
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 38,
                  "end": 39
                },
                "optional": false,
                "computed": false,
                "start": 33,
                "end": 39
              },
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 42,
                "end": 43
              },
              "start": 33,
              "end": 43
            },
            "directive": null,
            "start": 33,
            "end": 44
          }
        ],
        "start": 27,
        "end": 46
      },
      "expression": false,
      "start": 12,
      "end": 46
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C1",
        "optional": false,
        "typeAnnotation": null,
        "start": 54,
        "end": 56
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "undefined",
        "optional": false,
        "typeAnnotation": null,
        "start": 65,
        "end": 74
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 75,
        "end": 78
      },
      "abstract": false,
      "declare": false,
      "start": 48,
      "end": 78
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C2",
        "optional": false,
        "typeAnnotation": null,
        "start": 85,
        "end": 87
      },
      "typeParameters": null,
      "superClass": {
        "type": "Literal",
        "value": true,
        "raw": "true",
        "start": 96,
        "end": 100
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 101,
        "end": 104
      },
      "abstract": false,
      "declare": false,
      "start": 79,
      "end": 104
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C3",
        "optional": false,
        "typeAnnotation": null,
        "start": 111,
        "end": 113
      },
      "typeParameters": null,
      "superClass": {
        "type": "Literal",
        "value": false,
        "raw": "false",
        "start": 122,
        "end": 127
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 128,
        "end": 131
      },
      "abstract": false,
      "declare": false,
      "start": 105,
      "end": 131
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C4",
        "optional": false,
        "typeAnnotation": null,
        "start": 138,
        "end": 140
      },
      "typeParameters": null,
      "superClass": {
        "type": "Literal",
        "value": 42,
        "raw": "42",
        "start": 149,
        "end": 151
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 152,
        "end": 155
      },
      "abstract": false,
      "declare": false,
      "start": 132,
      "end": 155
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C5",
        "optional": false,
        "typeAnnotation": null,
        "start": 162,
        "end": 164
      },
      "typeParameters": null,
      "superClass": {
        "type": "Literal",
        "value": "hello",
        "raw": "\"hello\"",
        "start": 173,
        "end": 180
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 181,
        "end": 184
      },
      "abstract": false,
      "declare": false,
      "start": 156,
      "end": 184
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C6",
        "optional": false,
        "typeAnnotation": null,
        "start": 191,
        "end": 193
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "x",
        "optional": false,
        "typeAnnotation": null,
        "start": 202,
        "end": 203
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 204,
        "end": 207
      },
      "abstract": false,
      "declare": false,
      "start": 185,
      "end": 207
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C7",
        "optional": false,
        "typeAnnotation": null,
        "start": 214,
        "end": 216
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 225,
        "end": 228
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 229,
        "end": 232
      },
      "abstract": false,
      "declare": false,
      "start": 208,
      "end": 232
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 232
}
```
